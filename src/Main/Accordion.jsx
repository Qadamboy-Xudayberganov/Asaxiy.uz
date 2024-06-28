import { useState } from "react";
import "./Accordion.css";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item" key={index} onClick={() => toggle(index)}>
            <div className="title">
              <h2>{item.question}</h2>
              <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div className={selected === index ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
