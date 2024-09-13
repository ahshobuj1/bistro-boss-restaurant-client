import PropTypes from 'prop-types'; // ES6

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="max-w-md mx-auto text-center mb-6 md:mb-12 px-5 md:px-0">
            <p className="text-[#d99904] pb-4">---{subHeading}---</p>
            <h2 className="uppercase text-3xl md:text-4xl py-5 border-y-4">
                {heading}
            </h2>
        </div>
    );
};

export default SectionTitle;

SectionTitle.propTypes = {
    subHeading: PropTypes.string,
    heading: PropTypes.string,
};
