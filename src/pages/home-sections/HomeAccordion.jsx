import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const HomeAccordion = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion-section ${isOpen ? "open" : ""}`}
      onClick={toggleAccordion}
    >
      <div className="accordion-header">
        <div className="left-content">
          <span className="icon">{section.icon}</span>
          <h3>{section.title}</h3>
        </div>
        <span className="accordion-icon">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      <div className="arrow">
        {isOpen && <p className="accordion-content">{section.content}</p>}
      </div>
    </div>
  );
};
