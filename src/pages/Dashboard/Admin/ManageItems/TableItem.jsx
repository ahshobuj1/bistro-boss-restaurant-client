import {FaEdit, FaRegEdit, FaTrash} from 'react-icons/fa';

const TableItem = ({item, idx}) => {
    const {_id, name, image, price} = item;

    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={image} alt={name + 'image'} />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>

            <td>${price}</td>

            <td>
                <button className="btn btn-sm rounded-full bg-green-500 text-white btn-ghost">
                    <FaRegEdit></FaRegEdit>
                </button>
            </td>
            <th>
                <button className="btn btn-ghost btn-sm bg-red-600 text-white rounded-full">
                    <FaTrash></FaTrash>
                </button>
            </th>
        </tr>
    );
};

export default TableItem;
