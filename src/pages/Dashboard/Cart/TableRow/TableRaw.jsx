import PropTypes from 'prop-types'; // ES6
import {FaTrash} from 'react-icons/fa';

const TableRaw = ({cart, idx}) => {
    const {_id, email, name, image, price} = cart;

    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={image} alt="foods image" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost ">
                    <FaTrash className="text-red-600 text-xl"></FaTrash>
                </button>
            </th>
        </tr>
    );
};

export default TableRaw;

TableRaw.propTypes = {
    cart: PropTypes.object,
    idx: PropTypes.number,
};
