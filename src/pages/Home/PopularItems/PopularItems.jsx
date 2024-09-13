import MenuButton from '../../../components/MenuButton/MenuButton';
import useLoadData from '../../../hooks/useLoadData/useLoadData';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const PopularItems = () => {
    const menuItems = useLoadData();
    const popularItems = menuItems.filter(
        (item) => item.category === 'popular'
    );

    return (
        <section className="my-10 md:my-24">
            <div>
                <SectionTitle
                    heading="FROM OUR MENU"
                    subHeading="Check it out"
                />
            </div>
            <div className="grid lg:grid-cols-2 gap-6 justify-center ">
                {popularItems.slice(0, 6).map((item) => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>
            <MenuButton text="view full menu" />
        </section>
    );
};

export default PopularItems;
