import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <section>
            <div className="relative ">
                <img
                    src={featuredImg}
                    alt="featured image"
                    className="max-h-[730px] min-h-[600px] w-full"
                />
                <div className="absolute top-0 flex justify-center items-center bg-[#0000007f] w-full h-full text-white px-5 py-5 lg:px-32 lg:py-32 ">
                    <div className="text-center">
                        <div>
                            <SectionTitle
                                heading="our featured menu"
                                subHeading="check it out"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 lg:gap-16 justify-center items-center">
                            <div>
                                <img
                                    src={featuredImg}
                                    alt="featured image"
                                    className="max-w-72  md:max-w-96 rounded-md"
                                />
                            </div>
                            <div className="md:text-start font-semibold space-y-1 max-w-96">
                                <h4 className="text-base md:text-xl">
                                    March 20, 2023
                                </h4>
                                <h4 className="text-base semibold md:text-xl">
                                    WHERE CAN I GET SOME?
                                </h4>
                                <p className="text-sm md:text-base">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Error voluptate facere,
                                    deserunt dolores maiores quod nobis quas
                                    quasi. Eaque repellat recusandae.
                                </p>
                                <button className="btn btn-outline border-0 border-b-4 bg-[#ffffff25] border-white text-white mt-6">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
