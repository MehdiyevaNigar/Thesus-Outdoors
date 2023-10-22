import { PiRulerLight } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { AiOutlineTag } from "react-icons/ai";
import { HomeAccordion } from "./HomeAccordion";
import { useTranslation } from "react-i18next";

const TryThemOut = () => {
  const { t } = useTranslation();
  const sections = [
    {
      icon: <PiRulerLight />,
      title: t("home-sections.accordion.sections.section1.title"),
      content: t("home-sections.accordion.sections.section1.content"),
    },
    {
      icon: <LiaShippingFastSolid />,
      title: t("home-sections.accordion.sections.section2.title"),
      content: t("home-sections.accordion.sections.section2.content"),
    },
    {
      icon: <HiOutlineArrowUturnLeft />,
      title: t("home-sections.accordion.sections.section3.title"),
      content: t("home-sections.accordion.sections.section3.content"),
    },
    {
      icon: <AiOutlineTag />,
      title: t("home-sections.accordion.sections.section4.title"),
      content: t("home-sections.accordion.sections.section4.content"),
    },
  ];

  return (
    <div className="tryThemOut">
      <h2>{t("home-sections.accordion.try-them-out.h2")}</h2>
      <p>{t("home-sections.accordion.try-them-out.p")}</p>
      {sections.map((section, index) => (
        <HomeAccordion key={index} section={section} />
      ))}
    </div>
  );
};

export default TryThemOut;
