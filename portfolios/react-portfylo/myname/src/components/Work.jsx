// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function App() {
  // Use Intersection Observer to trigger animation when 50% of the component is in view
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the component's visibility triggers the animation
  });

  // Define animation spring
  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: {
      tension: 200,
      friction: 20,
    },
  });

  return (
    <>
      <main className="bg-[#ff9000] py-28 text-white ">
        <h1 className="text-center leading-tight font-normal text-4xl mb-32 ">
          Work
        </h1>
        {/* Wrap the Swiper component with animated.div and apply animation */}
        <animated.div ref={ref} style={fadeInUp}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full h-full py-12"
          >
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="Nature 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="Nature 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="Nature 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="Nature 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt="Nature 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt="Nature 6"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                alt="Nature 7"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt="Nature 8"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-4/5 h-4/5 max-w-xs max-h-xs bg-center bg-cover rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                alt="Nature 9"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </animated.div>
      </main>
    </>
  );
}
