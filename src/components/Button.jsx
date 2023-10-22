import { useState, useEffect } from "react";
import { PiArrowUpBold } from "react-icons/pi";
export const Button = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button className="scroll-button" onClick={scrollToTop}>
          <PiArrowUpBold className="arrow" />
        </button>
      )}
    </div>
  );
};
