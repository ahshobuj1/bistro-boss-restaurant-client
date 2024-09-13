import PropTypes from 'prop-types'; // ES6

const ItemCard = ({item}) => {
    const {name, recipe, image, price} = item;

    return (
        <div className="flex gap-1 max-w-xl px-1">
            <div>
                <img
                    src={image}
                    alt="foods images"
                    className="w-28 h-24 rounded-b-full rounded-tr-full  border-emerald-300 border-solid border-2"
                />
            </div>
            <div>
                <h2 className="text-base md:text-xl uppercase mb-2 pl-5">
                    {name}-----------------
                </h2>
                <p className="text-sm text-[#737373] pl-5">{recipe}</p>
            </div>
            <div>
                <p className="text-[#BB8506] text-xl">${price}</p>
            </div>
        </div>
    );
};

export default ItemCard;

ItemCard.propTypes = {
    item: PropTypes.object,
};
