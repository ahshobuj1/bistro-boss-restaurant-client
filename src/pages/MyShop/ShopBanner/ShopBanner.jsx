import SectionCover from '../../Shared/SectionCover/SectionCover';
import bannerImg from '../../../assets/shop/banner2.jpg';

const ShopBanner = () => {
    return (
        <div className="mb-10 md:mb-32">
            <SectionCover
                img={bannerImg}
                heading="OUR MENU"
                desc="WOULD YOU LIKE TO TRY A DISH"
            />
        </div>
    );
};

export default ShopBanner;
