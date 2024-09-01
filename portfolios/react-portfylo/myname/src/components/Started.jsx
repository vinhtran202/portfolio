import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function Started() {
  // Use Intersection Observer to trigger animation when 50% of the component is in view
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
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
    <animated.div
      ref={ref}
      style={fadeInUp}
      className="bg-[#ff9000] py-28 px-4 text-white"
    >
      <div className="max-w-[1170px] mx-auto text-center">
        <div className="mb-32">
          <h1 className="text-4xl font-normal mb-32 leading-tight">Hire Me!</h1>
        </div>

        <div className="mb-32 text-xl leading-relaxed font-normal">
          <p>
            Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
            reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
          </p>
        </div>

        <div>
          <button className="bg-white text-[#ff9000] py-2 px-4 text-lg font-normal rounded-full transition-all duration-500 hover:bg-[#ffffff57]">
            <a
              href="#"
              className="text-[#ff9000] uppercase font-normal no-underline px-12"
            >
              CONTACT US
            </a>
          </button>
        </div>
      </div>
    </animated.div>
  );
}
