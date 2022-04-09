import React, { useRef, useEffect, useState } from "react";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = e => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  var fadeElements = document.getElementsByClassName("scrollFade");

  function scrollFade() {
    var viewportBottom = window.scrollY + window.innerHeight;

    for (var index = 0; index < fadeElements.length; index++) {
      var element = fadeElements[index];
      var rect = element.getBoundingClientRect();

      var elementFourth = rect.height / 6;
      var fadeInPoint = window.innerHeight - elementFourth;
      var fadeOutPoint = -(rect.height / 8);

      if (rect.top <= fadeInPoint) {
        element.classList.add("scrollFade--visible");
        element.classList.add("scrollFade--animate");
        element.classList.remove("scrollFade--hidden");
      } else {
        element.classList.remove("scrollFade--visible");
        element.classList.add("scrollFade--hidden");
      }

      if (rect.top <= fadeOutPoint) {
        element.classList.remove("scrollFade--visible");
        element.classList.add("scrollFade--hidden");
      }
    }
  }

  document.addEventListener("scroll", scrollFade);
  window.addEventListener("resize", scrollFade);
  document.addEventListener("DOMContentLoaded", function () {
    scrollFade();
  });

  return (
    <div className="screen-text  scrollFade" ref={ref}>
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              className="mobile-screen-img slide-in-right "
              key={screen.mobile_img}
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
