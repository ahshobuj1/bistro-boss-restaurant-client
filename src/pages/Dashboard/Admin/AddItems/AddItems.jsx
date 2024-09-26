import {useForm} from 'react-hook-form';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import {FaUtensils} from 'react-icons/fa';

const AddItems = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section>
            <div>
                <SectionTitle
                    heading="Add an Items"
                    subHeading="What's New !"
                />
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-[#F3F3F3] p-4 md:p-12">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-medium">Name*</span>
                    </div>
                    <input
                        type="text"
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
                            defaultValue=""
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
                            type="number"
                            {...register('price', {required: true})}
                            required
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
                        {...register('recipe')}
                        placeholder="Recipe Details"
                        required
                        className="textarea textarea-bordered textarea-md w-full h-40"></textarea>
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-medium">
                            Item Image
                        </span>
                    </div>
                    <input
                        type="file"
                        {...register('image')}
                        required
                        className="file-input file-input-bordered w-full max-w-xs"
                    />
                </label>

                <button
                    type="submit"
                    className="btn btn-outline px-6 text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">
                    Add Items <FaUtensils />
                </button>
            </form>
        </section>
    );
};

export default AddItems;
