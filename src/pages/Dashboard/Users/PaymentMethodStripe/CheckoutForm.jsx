import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {useEffect, useState} from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure/useAxiosSecure';
import useCartQuery from '../../../../hooks/useCartQuery/useCartQuery';
import useAuth from '../../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import moment from 'moment';
import {useNavigate} from 'react-router-dom';

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [carts, refetch] = useCartQuery();
    const totalPrice = carts?.reduce(
        (total, cart) => total + parseFloat(cart.price),
        0
    );

    const stripe = useStripe();
    const elements = useElements();

    // Create paymentIntent as soon as the page loads
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure
                .post('/create-payment-intent', {price: totalPrice})
                .then((res) => {
                    //console.log(res.data);
                    setClientSecret(res.data.clientSecret);
                })
                .catch((err) => console.log(err.message));
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = (event) => {
        event.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: `You want to pay ${totalPrice} USD!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Payment!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (!stripe || !elements) {
                    return;
                    // Stripe.js not loaded it, make sure to disabled.
                }

                const card = elements.getElement(CardElement);
                if (card === null) {
                    return;
                }

                // Use card elements with other Stripe.js APIs
                const {error, paymentMethod} = await stripe.createPaymentMethod(
                    {
                        type: 'card',
                        card,
                    }
                );

                if (error) {
                    //console.log('create payment method error :', error);
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
                    // console.log('confirm payment ', paymentIntent);
                    if (paymentIntent.status === 'succeeded') {
                        //  console.log(paymentIntent.id);
                        setTransactionId(paymentIntent.id);

                        const paymentHistory = {
                            name: user?.displayName,
                            email: user?.email,
                            price: totalPrice,
                            status: 'pending',
                            transactionId: paymentIntent.id,
                            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                            ids: carts.map((cart) => cart._id),
                            cartIds: carts.map((cart) => cart.cartId),
                        };

                        axiosSecure
                            .post('/payments', paymentHistory)
                            .then((res) => {
                                //  console.log(res.data);
                                if (
                                    res.data.paymentResult.insertedId &&
                                    res.data.cartResult.deletedCount > 0
                                ) {
                                    Swal.fire({
                                        position: 'top',
                                        icon: 'success',
                                        title: `Successful Payment ${totalPrice} USD!`,
                                        showConfirmButton: false,
                                        timer: 2000,
                                    });

                                    refetch();
                                    // Redirect to the paymentHistory
                                    navigate('/dashboard/paymentHistory');
                                }
                            })
                            .catch((err) => console.log(err.message));
                    }
                }
            }
        });
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
                Payment ${totalPrice}
            </button>

            <p className="text-red-500 mt-2">{error}</p>
            {transactionId && (
                <p className="text-green-500 mt-2">
                    Payment succeeded, your transactionID: {transactionId}
                </p>
            )}
        </form>
    );
};

export default CheckoutForm;
