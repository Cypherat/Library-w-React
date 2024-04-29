import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="Landing">
      <header>
        <div className="header__container">
          <div className="header__descriptioon">
            <h1>
              Empower Your Mind: Dive into our Library for Character Development
            </h1>
            <h2>
              Find wisdom just few clicks <span className="blue">away</span>
            </h2>
            <Link to="books">
              <button className="btn">Browse Books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
