import PropTypes from 'prop-types'; // ES6

const SectionCover = ({img, heading, desc}) => {
    return (
        <div className="relative">
            <img src={img} alt="section cover" className="min-h-52" />
            <div className="absolute w-full h-full top-0 flex justify-center items-center">
                <div className="bg-[rgba(0,0,0,0.59)] py-3 px-3 md:py-5 md:px-5 lg:py-16 lg:px-20 text-center max-w-80 md:max-w-md lg:max-w-2xl text-white rounded-lg">
                    <h2 className="text-white uppercase text-xl md:text-4xl font-semibold mb-2">
                        {heading}
                    </h2>
                    <p className="text-xs  lg:font-semibold">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;

SectionCover.propTypes = {
    heading: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
};
