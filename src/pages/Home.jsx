import HomeHero from "./home-sections/HomeHero";
import BeOutside from "./home-sections/BeOutside";
import LookBook from "./home-sections/LookBook";
import BestSellers from "./home-sections/BestSellers";
import FootWear from "./home-sections/FootWear";
import TryThemOut from "./home-sections/TryThemOut";
import Claire from "./home-sections/Claire";
import InThePress from "./home-sections/InThePress";
import JoinUs from "./home-sections/JoinUs";
import { useEffect, useRef } from "react";

const Home = () => {
  const scrollToTopRef = useRef();
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="Home" ref={scrollToTopRef}>
      <HomeHero />
      <BeOutside />
      <LookBook />
      <BestSellers />
      <FootWear />
      <TryThemOut />
      <Claire />
      <InThePress />
      <JoinUs />
    </div>
  );
};

export default Home;
