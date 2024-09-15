import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types'; // ES6

const DynamicTitle = ({title}) => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | {title}</title>
            </Helmet>
        </>
    );
};

export default DynamicTitle;

DynamicTitle.propTypes = {
    title: PropTypes.string,
};
