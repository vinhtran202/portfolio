import "../assets/style/header.css";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Header() {
  const headerRef = useRef(null);
  const [startTypewriter, setStartTypewriter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.style.animation = "revealContent 1.5s ease forwards";
      }
      setStartTypewriter(true); // Bắt đầu hiệu ứng typewriter sau 3 giây
    }, 3000);
  }, []);

  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 1500,
  });

  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 1700,
  });

  const subTitleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 1900,
  });

  const listItemSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 2100,
  });

  return (
    <>
      <div className="split-screen"></div>
      <div className="header scroll-smooth" ref={headerRef}>
        <div className="overlay"></div>
        <div className="container">
          <animated.div className="logo" style={logoSpring}></animated.div>
          <animated.div className="title" style={titleSpring}>
            <span>Vinh Tran</span>
          </animated.div>
          <animated.div className="sub-title" style={subTitleSpring}>
            {/* Luôn hiển thị một khoảng trống */}
            <div>
              {startTypewriter ? (
                <Typewriter
                  options={{
                    loop: true, // Lặp lại vô cực
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hello")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Hola")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              ) : (
                // Hiển thị khoảng trắng trong khi chờ đợi
                <span>&nbsp;</span>
              )}
            </div>
          </animated.div>
          <ul>
            <animated.li style={listItemSpring}>
              <a href="#">
                <FaTwitter />
              </a>
            </animated.li>
            <animated.li style={listItemSpring}>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </animated.li>
            <animated.li style={listItemSpring}>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </animated.li>
            <animated.li style={listItemSpring}>
              <a href="#">
                <FaGlobe />
              </a>
            </animated.li>
          </ul>
        </div>
      </div>
    </>
  );
}
