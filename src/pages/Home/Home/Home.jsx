import BistroCover from '../BistroCover/BistroCover';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import OrderOnline from '../OrderOnline/OrderOnline';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <OrderOnline />
            <BistroCover />
        </div>
    );
};

export default Home;
