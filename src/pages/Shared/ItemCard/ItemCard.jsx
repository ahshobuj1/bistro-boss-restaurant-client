import img from '../../../assets/home/featured.jpg';

const ItemCard = () => {
    return (
        <div className="flex gap-1 max-w-xl px-1">
            <div>
                <img
                    src={img}
                    alt="foods images"
                    className="w-28 h-24 rounded-b-full rounded-tr-full  border-emerald-300 border-solid border-2"
                />
            </div>
            <div>
                <h2 className="text-base md:text-xl uppercase mb-2 pl-5">
                    ROAST DUCK BREAST -----------------
                </h2>
                <p className="text-sm text-[#737373] pl-5">
                    Roasted duck breast (served pink) with gratin potato and a
                    gritting cherry sauce
                </p>
            </div>
            <div>
                <p className="text-[#BB8506] text-xl">$hello</p>
            </div>
        </div>
    );
};

export default ItemCard;
