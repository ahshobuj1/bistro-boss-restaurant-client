import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const OrderOnline = () => {
    return (
        <section className="py-5 md:py-20">
            <div>
                <SectionTitle />
            </div>
            <div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src={img1} alt="menu images" />
                        <p className="uppercase absolute left-20 bottom-5 z-10 text-white">
                            salads
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="menu images" />
                        <p className="uppercase absolute left-20 bottom-5 z-10 text-white">
                            soups
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="menu images" />
                        <p className="uppercase absolute left-20 bottom-5 z-10 text-white">
                            pizzas
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="menu images" />
                        <p className="uppercase absolute left-20 bottom-5 z-10 text-white">
                            desserts
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="menu images" />
                        <p className="uppercase absolute left-20 bottom-5 z-10 text-white">
                            salads
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default OrderOnline;
