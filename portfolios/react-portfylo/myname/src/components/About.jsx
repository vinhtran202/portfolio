import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function About() {
  const aboutRef = useRef(null);
  const h1Ref = useRef(null);
  const boxRef = useRef(null);

  const [h1Style, h1Api] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
    config: {
      tension: 120,
      friction: 14,
      duration: 1000,
    },
  }));

  const [boxStyle, boxApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
    config: {
      tension: 120,
      friction: 14,
      duration: 1000,
    },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === h1Ref.current && entry.isIntersecting) {
            h1Api.start({ opacity: 1, transform: "translateY(0px)" });
          }
          if (entry.target === boxRef.current && entry.isIntersecting) {
            boxApi.start({ opacity: 1, transform: "translateY(0px)" });
          }
        });
      },
      {
        threshold: 0.5, // Ít nhất 50% phần tử phải xuất hiện trong viewport để kích hoạt
      }
    );

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, [h1Api, boxApi]);

  return (
    <div
      className="w-full h-screen bg-white text-black font-mono font-normal py-28"
      ref={aboutRef}
    >
      <animated.h1
        className="text-center text-4xl leading-snug font-normal mb-24"
        style={h1Style}
        ref={h1Ref}
      >
        About Me
      </animated.h1>
      <animated.div
        className="flex justify-center items-start w-4/5 mx-auto px-4 text-lg leading-relaxed"
        style={boxStyle}
        ref={boxRef}
      >
        <div className="w-96 px-4">
          <ul className="m-0 p-0 w-11/12">
            <li className="w-full list-none py-2.5">
              <span className="w-2/5 inline-block text-black font-bold">
                Full Name:
              </span>
              <span className="w-3/5 inline-block text-gray-700">
                Louie Jie Mahusay
              </span>
            </li>
            <li className="w-full list-none py-2.5">
              <span className="w-2/5 inline-block text-black font-bold">
                Phone:
              </span>
              <span className="w-3/5 inline-block text-gray-700">
                + 1235 2355 98
              </span>
            </li>
            <li className="w-full list-none py-2.5">
              <span className="w-2/5 inline-block text-black font-bold">
                Email:
              </span>
              <span className="w-3/5 inline-block text-gray-700">
                info@yoursite.com
              </span>
            </li>
            <li className="w-full list-none py-2.5">
              <span className="w-2/5 inline-block text-black font-bold">
                Website:
              </span>
              <span className="w-3/5 inline-block text-gray-700">
                www.yoursite.com
              </span>
            </li>
            <li className="w-full list-none py-2.5">
              <span className="w-2/5 inline-block text-black font-bold">
                Address:
              </span>
              <span className="w-3/5 inline-block text-gray-700">
                198 West 21th Street, Suite 721 New York NY 10016
              </span>
            </li>
          </ul>
        </div>
        <div className="w-4/5 px-4">
          <h2 className="font-normal mb-5 text-2xl">Hello There!</h2>
          <p className="mb-7">
            There live the blind texts far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in
            bookmarksgrove there live the blind texts far from the countries.
          </p>
          <p className="mb-7">
            Far far away, behind the word mountains, Quos quia provident
            consequuntur culpa facere ratione maxime commodi voluptates id
            repellat velit eaque aspernatur expedita. Possimus itaque adipisci
            there live the blind texts from the countries Vokalia and
            Consonantia, there live the blind texts. Quos quia provident
            consequuntur culpa facere ratione maxime commodi voluptates id
            repellat velit eaque aspernatur expedita. Possimus itaque adipisci.
          </p>
          <ul className="flex m-0 p-0">
            <li className="p-0 list-none inline-block">
              <a
                href="#"
                className="inline-block w-10 h-10 text-center text-white bg-gray-800 p-2.5 rounded transition-all duration-500 mr-2.5 hover:bg-orange-500"
              >
                <FaTwitter className="scale-125" />
              </a>
            </li>
            <li className="p-0 list-none inline-block">
              <a
                href="#"
                className="inline-block w-10 h-10 text-center text-white bg-gray-800 p-2.5 rounded transition-all duration-500 mr-2.5 hover:bg-orange-500"
              >
                <FaFacebookF className="scale-125" />
              </a>
            </li>
            <li className="p-0 list-none inline-block">
              <a
                href="#"
                className="inline-block w-10 h-10 text-center text-white bg-gray-800 p-2.5 rounded transition-all duration-500 mr-2.5 hover:bg-orange-500"
              >
                <FaLinkedinIn className="scale-125" />
              </a>
            </li>
            <li className="p-0 list-none inline-block">
              <a
                href="#"
                className="inline-block w-10 h-10 text-center text-white bg-gray-800 p-2.5 rounded transition-all duration-500 mr-2.5 hover:bg-orange-500"
              >
                <FaGlobe className="scale-125" />
              </a>
            </li>
          </ul>
        </div>
      </animated.div>
    </div>
  );
}
