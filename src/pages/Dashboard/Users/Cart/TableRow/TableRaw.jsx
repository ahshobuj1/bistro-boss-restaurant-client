import PropTypes from 'prop-types'; // ES6
import {FaTrash} from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure/useAxiosSecure';
import useCartQuery from '../../../../../hooks/useCartQuery/useCartQuery';

const TableRaw = ({cart, idx}) => {
    const {_id, name, image, price} = cart;
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCartQuery();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/carts/${id}`)
                    .then((res) => {
                      //  console.log(res);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success',
                            });

                            refetch();
                        }
                    })
                    .catch((err) => console.log(err.message));
            }
        });
    };

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
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-ghost ">
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
