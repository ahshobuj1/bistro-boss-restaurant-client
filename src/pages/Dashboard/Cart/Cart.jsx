import useCartQuery from '../../../hooks/useCartQuery/useCartQuery';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import TableRaw from './TableRow/TableRaw';

const Cart = () => {
    const [carts] = useCartQuery();
    const totalPrice = carts.reduce(
        (prevTotal, cart) => prevTotal + cart.price,
        0
    );

    return (
        <div>
            <div>
                <SectionTitle subHeading="My Cart" heading="want to add more" />
            </div>

            <div className="bg-slate-100 p-5">
                <div className="flex justify-between items-center mb-9">
                    <h2 className="text-3xl font-bold">
                        length : {carts.length}
                    </h2>
                    <h2 className="text-3xl font-bold">
                        Total Price : {totalPrice}
                    </h2>

                    <button className="btn btn-outline btn-sm bg-yellow-600 text-white">
                        Payment
                    </button>
                </div>

                <div>
                    <div className="overflow-x-auto rounded-t-lg">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-yellow-600 text-white">
                                <tr>
                                    <th>#</th>
                                    <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((cart, idx) => (
                                    <TableRaw
                                        key={cart._id}
                                        cart={cart}
                                        idx={idx}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
