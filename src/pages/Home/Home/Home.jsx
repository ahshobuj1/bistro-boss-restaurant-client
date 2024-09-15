import DynamicTitle from '../../../components/WebTitle/DynamicTitle';
import BistroCover from '../BistroCover/BistroCover';
import CallUs from '../CallUs/CallUs';
import Featured from '../Featured/Featured';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import OrderOnline from '../OrderOnline/OrderOnline';
import PopularItems from '../PopularItems/PopularItems';
import RecommendItem from '../RecommendItem/RecommendItem';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <DynamicTitle title="Home" />
            <HeaderBanner />
            <OrderOnline />
            <BistroCover />
            <PopularItems />
            <CallUs />
            <RecommendItem />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;
