import PropTypes from 'prop-types'; // ES6

const MenuButton = ({text}) => {
    return (
        <div className="text-center mt-12">
            <button className="btn btn-outline px-10 border-0 border-b-4 bg-slate-100 uppercase">
                {text}
            </button>
        </div>
    );
};

export default MenuButton;

MenuButton.propTypes = {
    text: PropTypes.string,
};
