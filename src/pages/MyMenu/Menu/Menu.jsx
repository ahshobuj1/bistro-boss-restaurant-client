import useLoadData from '../../../hooks/useLoadData/useLoadData';
import MenuBanner from '../MenuBanner/MenuBanner';
import MenuCategoryItem from '../MenuCategoryItem/MenuCategoryItem';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import DynamicTitle from '../../../components/WebTitle/DynamicTitle';

const Menu = () => {
    const [menuItems, loadingItems] = useLoadData();

    const dessert = menuItems.filter((item) => item.category === 'dessert');
    const pizza = menuItems.filter((item) => item.category === 'pizza');
    const salad = menuItems.filter((item) => item.category === 'salad');
    const soup = menuItems.filter((item) => item.category === 'soup');

    if (loadingItems) {
        return (
            <div className="flex my-5 mx-auto w-52 flex-col gap-4">
                <p>Please wait, Menu Items is loading...</p>
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }

    return (
        <section>
            <DynamicTitle title="Menu" />
            <MenuBanner />
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't Miss" />

            {/* Desserts */}
            <MenuCategoryItem
                items={dessert}
                img={dessertImg}
                heading="dessert"
                desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            {/* pizza */}
            <MenuCategoryItem
                items={pizza}
                img={pizzaImg}
                heading="pizza"
                desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            {/* salad */}
            <MenuCategoryItem
                items={salad}
                img={saladImg}
                heading="salads"
                desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            {/* soup */}
            <MenuCategoryItem
                items={soup}
                img={soupImg}
                heading="soups"
                desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
        </section>
    );
};

export default Menu;
