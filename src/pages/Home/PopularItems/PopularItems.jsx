import {Link} from 'react-router-dom';
import MenuButton from '../../../components/MenuButton/MenuButton';
import useLoadData from '../../../hooks/useLoadData/useLoadData';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const PopularItems = () => {
    const [menuItems, loadingItems] = useLoadData();

    const popularItems = menuItems.filter(
        (item) => item.category === 'popular'
    );

    if (loadingItems) {
        return (
            <div className="flex my-5 mx-auto w-52 flex-col gap-4">
                <p>Please wait, Items is loading...</p>
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }

    return (
        <section className="my-10 md:my-24">
            <div>
                <SectionTitle
                    heading="OUR popular MENU"
                    subHeading="Check it out"
                />
            </div>
            <div className="grid lg:grid-cols-2 gap-6 justify-center ">
                {popularItems.slice(0, 6).map((item) => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>
            <Link to="/menu">
                <MenuButton text="view full menu" />
            </Link>
        </section>
    );
};

export default PopularItems;
