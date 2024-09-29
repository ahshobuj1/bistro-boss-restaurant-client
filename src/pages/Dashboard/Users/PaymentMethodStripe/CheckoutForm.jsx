import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {useEffect, useState} from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure/useAxiosSecure';
import useCartQuery from '../../../../hooks/useCartQuery/useCartQuery';
import useAuth from '../../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [carts] = useCartQuery();
    const totalPrice = carts?.reduce((total, cart) => total + cart.price, 0);

    const stripe = useStripe();
    const elements = useElements();

    // Create paymentIntent as soon as the page loads
    useEffect(() => {
        axiosSecure
            .post('/create-payment-intent', {price: totalPrice})
            .then((res) => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret);
            })
            .catch((err) => console.log(err.message));
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
            // Stripe.js not loaded it, make sure to disabled.
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        // Use card elements with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('create payment method error :', error);
            setError(error.message);
        } else {
            console.log('createPaymentMethod', paymentMethod);
            setError('');
        }

        // Confirm card payment
        const {paymentIntent, error: confirmError} =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.name,
                        email: user?.email,
                    },
                },
            });

        if (confirmError) {
            setError(confirmError.message);
        } else {
            console.log('confirm payment ', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log(paymentIntent.id);
                setTransactionId(paymentIntent.id);

                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Your payment has been added successfully',
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-screen-sm mx-auto bg-[#0704040f] p-6 rounded-md">
            <CardElement
                className="max-w-screen-sm mx-auto"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className="btn btn-sm btn-neutral mt-6">
                Payment
            </button>

            <p className="text-red-500">{error}</p>
            {transactionId && (
                <p className="text-green-500">
                    Payment successful, your transactionID: {transactionId}
                </p>
            )}
        </form>
    );
};

export default CheckoutForm;
