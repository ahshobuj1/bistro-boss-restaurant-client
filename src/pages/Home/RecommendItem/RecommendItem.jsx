import useLoadData from '../../../hooks/useLoadData/useLoadData';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const RecommendItem = () => {
    const menuItems = useLoadData();
    const saladItems = menuItems.filter((item) => item.category === 'salad');

    return (
        <section className="my-10 md:my-24 ">
            <div>
                <SectionTitle
                    heading="CHEF RECOMMENDS"
                    subHeading="Should Try"
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {saladItems.slice(0, 6).map((item) => (
                    <FoodCard key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default RecommendItem;
