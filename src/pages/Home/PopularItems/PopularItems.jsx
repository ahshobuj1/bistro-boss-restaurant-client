import useLoadData from '../../../hooks/useLoadData/useLoadData';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const PopularItems = () => {
    const menuItems = useLoadData();

    return (
        <section className="my-24">
            <div>
                <SectionTitle
                    heading="FROM OUR MENU"
                    subHeading="Check it out"
                />
            </div>
            <div className="grid lg:grid-cols-2 gap-6 justify-center ">
                <ItemCard />
            </div>
        </section>
    );
};

export default PopularItems;
