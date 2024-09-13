import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Rating from 'react-rating';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useEffect, useState} from 'react';
import groupImg from '../../../assets/home/Group.png';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/public/reviews.json')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err.message));
    }, []);
    return (
        <section className="my-10 md:my-24">
            <div>
                <SectionTitle
                    heading="TESTIMONIALS"
                    subHeading="What Our Clients Say"
                />
            </div>
            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="text-center px-7 md:px-20">
                                <Rating
                                    initialRating={review.rating}
                                    readonly
                                />
                                <div className="flex justify-center my-4 md:my-10">
                                    <img src={groupImg} alt="icon images" />
                                </div>
                                <p>{review.details}</p>
                                <h3 className="text-3xl font-medium text-orange-500">
                                    {review.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
