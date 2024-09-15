import {Link} from 'react-router-dom';
import MenuButton from '../../../components/MenuButton/MenuButton';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import SectionCover from '../../Shared/SectionCover/SectionCover';
import PropTypes from 'prop-types'; // ES6

const MenuCategoryItem = ({items, img, heading, desc}) => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
                {items.map((item) => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>
            <Link to={`/shop/${heading}`}>
                <MenuButton text="order your favorite food" />
            </Link>
            <div className="my-6">
                <SectionCover img={img} heading={heading} desc={desc} />
            </div>
        </section>
    );
};

export default MenuCategoryItem;

MenuCategoryItem.propTypes = {
    items: PropTypes.array,
    img: PropTypes.any,
    heading: PropTypes.string,
    desc: PropTypes.string,
};
