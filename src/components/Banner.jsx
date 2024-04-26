import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'animate.css';
const Banner = () => {
    return (
        <div className='my-4 bg-[#80665FCC] rounded-lg mx-10 lg:mx-0 italic'>
             <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{clickable: true}}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        className="mySwiper lg:h-[88vh] w-[50vw]"
      >
        <SwiperSlide>
          <img className='relative contrast-[50%]' src="/public/banner1.jpg" />
          <div className='absolute top-[20%] hidden md:block lg:top-[50%] left-[10%] bg-none md:left-[20%]'>
                <h1 className='text-white text-4xl font-bold animate__animated animate__backInDown my-8'> Gateway to Unforgettable Adventures</h1>
                <p className='text-white md:w-2/3 lg:text-center font-semibold animate__animated animate__backInUp lg:mx-10'>Discover breathtaking destinations and create lasting memories with our expertly curated travel experiences. Start your journey today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-[50%]' src="/public/banner2.jpg" />
          <div className='absolute top-[20%] hidden md:block lg:top-[50%] left-[10%] bg-none md:left-[20%]'>
                <h1 className='text-white text-4xl font-bold animate__animated animate__backInDown my-8'> Gateway to Unforgettable Adventures</h1>
                <p className='text-white lg:text-center md:w-2/3 font-semibold lg:mx-10'>Discover breathtaking destinations and create lasting memories with our expertly curated travel experiences. Start your journey today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-[50%]' src="/public/banner3.jpg" />
          <div className='absolute top-[20%] hidden md:block lg:top-[50%]  md:top-[20%] left-[10%] bg-none md:left-[20%]'>
                <h1 className='text-white text-4xl font-bold animate__animated animate__backInDown my-8'> Gateway to Unforgettable Adventures</h1>
                <p className='text-white lg:text-center md:w-2/3 font-semibold lg:mx-10'>Discover breathtaking destinations and create lasting memories with our expertly curated travel experiences. Start your journey today!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='relative contrast-[50%]' src="/public/banner4.jpg" />
          <div className='absolute top-[20%] hidden md:block lg:top-[50%] left-[10%] bg-none md:left-[20%]'>
                <h1 className='text-white text-4xl font-bold animate__animated animate__backInDown my-8'> Gateway to Unforgettable Adventures</h1>
                <p className='text-white lg:text-center md:w-2/3 font-semibold lg:mx-10'>Discover breathtaking destinations and create lasting memories with our expertly curated travel experiences. Start your journey today!</p>
          </div>
        </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Banner;