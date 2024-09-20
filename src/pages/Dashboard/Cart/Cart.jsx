import useCartQuery from '../../../hooks/useCartQuery/useCartQuery';

const Cart = () => {
    const [carts] = useCartQuery();

    return (
        <div>
            <h2>length : {carts.length}</h2>
        </div>
    );
};

export default Cart;
