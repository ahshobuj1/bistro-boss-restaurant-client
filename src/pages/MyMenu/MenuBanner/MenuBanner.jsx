import SectionCover from '../../Shared/SectionCover/SectionCover';
import img from '../../../assets/menu/banner3.jpg';

const MenuBanner = () => {
    return (
        <div className="mb-10">
            <SectionCover
                img={img}
                heading="OUR MENU"
                desc="WOULD YOU LIKE TO TRY A DISH"
            />
        </div>
    );
};

export default MenuBanner;
