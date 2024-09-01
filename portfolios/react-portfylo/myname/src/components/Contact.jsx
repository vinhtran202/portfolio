import ReactPlayer from "react-player";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  // Use Intersection Observer to trigger animation when 50% of the component is in view
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  // Define animation spring
  const fadeIn = useSpring({
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
      style={fadeIn}
      className="mx-auto text-black text-lg font-normal h-[100vh] overflow-hidden"
    >
      <div className="flex justify-between">
        <div className="w-1/2 ">
          <ReactPlayer
            url="https://www.youtube.com/embed/zM0ZU9ltOjE?si=NxB6RLcIHqzt26Ca"
            className="w-full h-full object-cover object-center mb-2"
            width="100%"
            height="100%"
            muted
            playing
            loop
          />
        </div>
        <div className="w-1/2 p-16">
          <div className="text-black font-normal mb-5">
            <h2 className="text-4xl leading-relaxed mb-5">Contact</h2>
            <form>
              <input
                type="text"
                id="name"
                placeholder="First name ..."
                className="w-[51%] px-5 py-3 mb-1 border border-gray-300 rounded-md box-border"
              />
              <input
                type="text"
                id="name"
                placeholder="Last name ..."
                className="w-[51%] px-5 py-3 mb-1 border border-gray-300 rounded-md box-border"
              />
              <input
                type="text"
                id="email-subject"
                placeholder="Email ..."
                className="w-full px-5 py-3 mb-1 border border-gray-300 rounded-md box-border"
              />
              <input
                type="text"
                id="email-subject"
                placeholder="Subject ..."
                className="w-full px-5 py-3 mb-1 border border-gray-300 rounded-md box-border"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message ..."
                className="w-full px-5 py-3 mb-1 border border-gray-300 rounded-md box-border"
              ></textarea>
              <button className="w-full bg-[#ff9000] text-white py-3 px-5 mb-2 rounded-lg cursor-pointer transition-all duration-500 hover:bg-[#ff910093] hover:text-black">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
