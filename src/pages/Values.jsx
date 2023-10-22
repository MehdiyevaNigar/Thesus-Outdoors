import { useEffect, useRef } from "react";
import ClimatePositive from "./values-sections/ClimatePositive";
import Diversity from "./values-sections/Diversity";
import DivertingWaste from "./values-sections/DivertingWaste";
import LivingWage from "./values-sections/LivingWage";
import OurValues from "./values-sections/OurValues";
import Production from "./values-sections/Production";
import Transparency from "./values-sections/Transparency";
import TreeHug from "./values-sections/TreeHug";
import ValuesHero from "./values-sections/ValuesHero";
import WhereWeAre from "./values-sections/WhereWeAre";
import WhoWeAre from "./values-sections/WhoWeAre";

const Values = () => {
  const scrollToTopRef = useRef();
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={scrollToTopRef}>
      <ValuesHero />
      <WhoWeAre />
      <WhereWeAre />
      <OurValues />
      <TreeHug />
      <Transparency />
      <Diversity />
      <LivingWage />
      <Production />
      <ClimatePositive />
      <DivertingWaste />
    </div>
  );
};

export default Values;
