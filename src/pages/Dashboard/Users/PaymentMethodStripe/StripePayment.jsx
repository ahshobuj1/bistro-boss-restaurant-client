import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('publishableKey');

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
