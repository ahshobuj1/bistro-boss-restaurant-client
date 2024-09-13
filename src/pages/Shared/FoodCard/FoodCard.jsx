import PropTypes from 'prop-types'; // ES6

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;

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
                    <button className="btn btn-outline px-10 border-0 border-b-4 border-orange-500 text-orange-400 bg-slate-100">
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
