import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "../components/ui/Highlight.jsx";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            You know <span className="blue">nothing but everything</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Fast Access"
              para="Purchase and read online instantly!"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="Minute learning"
              para="Press and learn!"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Worthy"
              para="You can start for free and end worthy!"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
