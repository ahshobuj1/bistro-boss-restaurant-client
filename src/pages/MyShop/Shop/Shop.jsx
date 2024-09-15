import DynamicTitle from '../../../components/WebTitle/DynamicTitle';
import ShopBanner from '../ShopBanner/ShopBanner';
import ShopTab from '../ShopTab/ShopTab';

const Shop = () => {
    return (
        <section>
            <DynamicTitle title="Shop" />
            <ShopBanner />
            <ShopTab />
        </section>
    );
};

export default Shop;
