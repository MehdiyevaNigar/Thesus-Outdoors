import LookBook2 from "./lookbook-sections/LookBook2";
import BeOutside from "./home-sections/BeOutside";
import { useEffect, useRef } from "react";

const LookbookPage = () => {
  const scrollToTopRef = useRef();
  
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={scrollToTopRef}>
      <LookBook2 />
      <BeOutside />
    </div>
  );
};

export default LookbookPage;
