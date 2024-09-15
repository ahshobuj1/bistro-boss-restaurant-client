import PropTypes from 'prop-types'; // ES6
import FoodCard from '../../../Shared/FoodCard/FoodCard';

const TabPanelItems = ({items}) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <FoodCard key={item._id} item={item} />
                ))}
            </div>
        </>
    );
};

export default TabPanelItems;

TabPanelItems.propTypes = {
    items: PropTypes.array,
};
