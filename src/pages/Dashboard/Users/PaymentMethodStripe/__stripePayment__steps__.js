/*

*------------Stripe Payment Steps---------------

1. Create stripe payment components
2. install stripe react js or visit docs/github 
3. loadStripe with publishable key and set it to Elements - import those first
4. Create (CheckoutForm) step by step - {useStripe, useElements, getElement, cratePaymentMethod,}
5. Create account in Stripe website 
6. Get ApiKey - publishable key 

7. Visit Stripe website - Docs > payment > quickStart
8. Install stripe backend server
9. Create payment-intent API > res.send - clientSecret
10. Make sure used backend -( payment_method_types: ['card] )

11. useEffect ->  Create paymentIntent as soon as the page loads
12. Manage state for clientSecret
13. Use -> confirmCardPayment
14. confirm payment => paymentIntent 
15. Use backend stripe secret key -> with two lines
    15.1 const Stripe = require('stripe')
    15.2 const stripe = Stripe(api_secret_key)



* */
