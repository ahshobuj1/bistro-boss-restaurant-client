const CheckoutForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return <form onSubmit={handleSubmit}></form>;
};

export default CheckoutForm;
