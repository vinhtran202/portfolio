import { FaHatCowboy, FaSuitcase } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function Resume() {
  const { ref: resumeTitleRef, inView: resumeTitleInView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  const { ref: workTimelineRef, inView: workTimelineInView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  const { ref: educationTimelineRef, inView: educationTimelineInView } =
    useInView({
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

  // Animation for the resume title
  const resumeTitleStyle = useSpring({
    opacity: resumeTitleInView ? 1 : 0,
    transform: resumeTitleInView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 120, friction: 14 },
  });

  // Animation for the work timeline
  const workTimelineStyle = useSpring({
    opacity: workTimelineInView ? 1 : 0,
    transform: workTimelineInView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 120, friction: 14 },
  });

  // Animation for the education timeline
  const educationTimelineStyle = useSpring({
    opacity: educationTimelineInView ? 1 : 0,
    transform: educationTimelineInView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="py-28 mx-auto font-mono relative overflow-hidden">
      <animated.div
        className="text-center leading-loose font-normal text-4xl text-black mb-32"
        style={resumeTitleStyle}
        ref={resumeTitleRef}
      >
        <h1>My Resume</h1>
      </animated.div>

      <div className="relative py-5 mb-2 text-center">
        <h3 className="inline-block px-4 py-2 text-sm uppercase tracking-widest font-bold bg-gray-200 rounded relative">
          Work Experience
          <div className="line w-[600px] h-[1px] border-r-[1px] bg-[#4d4d4d75] absolute rotate-90 left-1/2 -translate-x-1/2 top-[335px]"></div>
        </h3>
      </div>

      <animated.ul
        className="relative py-5 list-none m-0"
        style={workTimelineStyle}
        ref={workTimelineRef}
      >
        <li className="relative w-1/2 py-5 pl-16 box-border text-right">
          <div className="absolute top-1/2 left-full w-11 h-11 bg-orange-500 rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaSuitcase />
          </div>
          <div className="bg-white p-5 rounded shadow-md mr-10">
            <h3 className="font-normal mb-2 text-2xl">Senior Developer</h3>
            <span className="block mb-2 text-base text-gray-400">
              Company Name - 2016 - Current
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </li>
        <li className="relative w-1/2 py-5 pr-16 box-border text-left ml-[calc(50%)]">
          <div className="absolute top-1/2 right-full w-11 h-11 bg-orange-500 rounded-full z-20 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaSuitcase />
          </div>
          <div className="bg-white p-5 rounded shadow-md ml-10">
            <h3 className="font-normal mb-2 text-2xl">Junior Developer</h3>
            <span className="block mb-2 text-base text-gray-400">
              Company Name - 2013 - 2015
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
            </div>
          </div>
        </li>
        <li className="relative w-1/2 py-5 pl-16 box-border text-right">
          <div className="absolute top-1/2 left-full w-11 h-11 bg-orange-500 rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaSuitcase />
          </div>
          <div className="bg-white p-5 rounded shadow-md mr-10">
            <h3 className="font-normal mb-2 text-2xl">UI/UX Designer</h3>
            <span className="block mb-2 text-base text-gray-400">
              Company Name - 2010 - 2012
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </li>
      </animated.ul>

      <div className="relative py-5 mb-2 text-center">
        <h3 className="inline-block px-4 py-2 text-sm uppercase tracking-widest font-bold bg-gray-200 rounded relative">
          Education
          <div className="line w-[600px] h-[1px] border-r-[1px] bg-[#4d4d4d75] absolute rotate-90 left-1/2 -translate-x-1/2 top-[335px]"></div>
        </h3>
      </div>

      <animated.ul
        className="relative py-5 list-none m-0"
        style={educationTimelineStyle}
        ref={educationTimelineRef}
      >
        <li className="relative w-1/2 py-5 pl-16 box-border text-right">
          <div className="absolute top-1/2 left-full w-11 h-11 bg-orange-500 rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaHatCowboy />
          </div>
          <div className="bg-white p-5 rounded shadow-md mr-10">
            <h3 className="font-normal mb-2 text-2xl">Masters Degree</h3>
            <span className="block mb-2 text-base text-gray-400">
              University Name - 2007 - 2009
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </li>
        <li className="relative w-1/2 py-5 pr-16 box-border text-left ml-[calc(50%)]">
          <div className="absolute top-1/2 right-full w-11 h-11 bg-orange-500 rounded-full z-20 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaHatCowboy />
          </div>
          <div className="bg-white p-5 rounded shadow-md ml-10">
            <h3 className="font-normal mb-2 text-2xl">Bachelors Degree</h3>
            <span className="block mb-2 text-base text-gray-400">
              University Name - 2002 - 2006
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
            </div>
          </div>
        </li>
        <li className="relative w-1/2 py-5 pl-16 box-border text-right">
          <div className="absolute top-1/2 left-full w-11 h-11 bg-orange-500 rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaHatCowboy />
          </div>
          <div className="bg-white p-5 rounded shadow-md mr-10">
            <h3 className="font-normal mb-2 text-2xl">Associate Degree</h3>
            <span className="block mb-2 text-base text-gray-400">
              College Name - 1998 - 2001
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </li>
      </animated.ul>
    </div>
  );
}
