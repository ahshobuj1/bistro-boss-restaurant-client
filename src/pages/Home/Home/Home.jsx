import BistroCover from '../BistroCover/BistroCover';
import CallUs from '../CallUs/CallUs';
import Featured from '../Featured/Featured';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import OrderOnline from '../OrderOnline/OrderOnline';
import PopularItems from '../PopularItems/PopularItems';
import RecommendItem from '../RecommendItem/RecommendItem';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <OrderOnline />
            <BistroCover />
            <PopularItems />
            <CallUs />
            <RecommendItem />
            <Featured />
        </div>
    );
};

export default Home;
