import PropTypes from 'prop-types'; // ES6
import useAuth from '../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import {useLocation, useNavigate} from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';
import useCartQuery from '../../../hooks/useCartQuery/useCartQuery';

const FoodCard = ({item}) => {
    const {_id, name, recipe, image, price} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCartQuery();

    const handleAddCart = () => {
        if (!user) {
            Swal.fire({
                title: 'You are not Logged in?',
                text: 'You have to login to add cart!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes,go to login!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin', {state: location.pathname});
                }
            });
        } else {
            const cart = {
                cartId: _id,
                name,
                image,
                price,
                email: user?.email,
            };

            axiosSecure.post('/carts', cart).then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your order has been added to the cart',
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    refetch();
                }
            });
        }
    };

    return (
        <div className="card bg-[#F3F3F3] shadow-xl pt-2 mx-2 lg:mx-0">
            <figure>
                <img src={image} alt="foods" className="rounded-xl" />
            </figure>
            <p className="absolute top-5 right-10 bg-neutral-800 rounded-xl text-white px-2">
                ${price}
            </p>

            <div className="card-body ">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={handleAddCart}
                        className="btn btn-outline px-10 border-0 border-b-4 border-orange-500 text-orange-400 bg-slate-100">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;

FoodCard.propTypes = {
    item: PropTypes.object,
};
