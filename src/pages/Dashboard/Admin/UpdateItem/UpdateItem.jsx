import {useLoaderData} from 'react-router-dom';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure/useAxiosSecure';

const UpdateItem = () => {
    const item = useLoaderData();
    const {_id, name, price, recipe, category} = item;
    const axiosSecure = useAxiosSecure();

    const {register, handleSubmit} = useForm();
    const onSubmit = (updatedItem) => {
        console.log(updatedItem);

        Swal.fire({
            title: 'Are you sure?',
            text: `You want to Update the ${name} Item!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .patch(`/menu/${_id}`, updatedItem)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Updated!',
                                text: `${name} has been updated successfully`,
                                icon: 'success',
                            });
                        }
                    })
                    .catch((err) => console.log(err.message));
            }
        });
    };

    return (
        <div>
            <SectionTitle heading="Update Item" subHeading="Update Your Item" />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-[#F3F3F3] p-4 md:p-12">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-medium">Name*</span>
                    </div>
                    <input
                        type="text"
                        defaultValue={name}
                        {...register('name', {required: true})}
                        required
                        placeholder="Recipe Name"
                        className="input input-bordered w-full"
                    />
                </label>
                <div className="flex gap-6">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">
                                Category!
                            </span>
                        </div>
                        <select
                            defaultValue={category}
                            required
                            {...register('category', {required: true})}
                            className="select select-bordered w-full ">
                            <option disabled value="">
                                Select Category?
                            </option>
                            <option value="salad">Salad</option>
                            <option value="dessert">Dessert</option>
                            <option value="soup">Soup</option>
                            <option value="pizza">Pizza</option>
                            <option value="drinks">Drinks</option>
                            <option value="popular">Popular</option>
                        </select>
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">
                                $ Price*
                            </span>
                        </div>
                        <input
                            type="Number"
                            {...register('price')}
                            defaultValue={price}
                            placeholder="Price"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-medium">
                            Recipe Details*
                        </span>
                    </div>
                    <textarea
                        defaultValue={recipe}
                        {...register('recipe')}
                        placeholder="Recipe Details"
                        required
                        className="textarea textarea-bordered textarea-md w-full h-40"></textarea>
                </label>

                <button
                    type="submit"
                    className="btn btn-outline w-full px-6 text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">
                    Update Item
                </button>
            </form>
        </div>
    );
};

export default UpdateItem;
