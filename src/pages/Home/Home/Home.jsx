import BistroCover from '../BistroCover/BistroCover';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import OrderOnline from '../OrderOnline/OrderOnline';
import PopularItems from '../PopularItems/PopularItems';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <OrderOnline />
            <BistroCover />
            <PopularItems />
        </div>
    );
};

export default Home;
