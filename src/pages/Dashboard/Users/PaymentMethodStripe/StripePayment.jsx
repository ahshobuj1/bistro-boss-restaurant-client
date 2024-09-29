import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_payment_publishable_key);

const StripePayment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Stripe Payment" />

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default StripePayment;
