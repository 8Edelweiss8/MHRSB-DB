import React from "react";
import Header from "../components/header";
import "../styles/style.css";
import primordialIC from "../assets/img/monster-icons/primordialIC.jpg";
import amatsuIC from "../assets/img/monster-icons/amatsuIC.jpg";
import rshagaruIC from "../assets/img/monster-icons/rshagaruIC.jpg";
import velkhanaIC from "../assets/img/monster-icons/velkhanaIC.jpg";
import rcgvalstraxIC from "../assets/img/monster-icons/rcgvalstraxIC.jpg";
import cgoreIC from "../assets/img/monster-icons/cgoreIC.jpg";

function Largemonsters() {
  const sampledata1 = "This is a sample data for the box";
  return (
    <>
      <Header />

      <section id="hero" className="d-flex">
        <div className="container" data-aos="fade-up">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8">
              <h1 className="bluetext">Large Monsters</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="largemonstersection">
        <div className="main">
          <h1 className="h1LM">Large Monster List as of Title Update 5</h1>
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={primordialIC} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Primordial Malzeno</h2>
                  <p className="card_text">Elder Dragon</p>
                  <button className="btnLM card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={amatsuIC} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Amatsumagatsuchi</h2>
                  <p className="card_text">Elder Dragon</p>
                  <button className="btnLM card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={rshagaruIC} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Risen Shagaru Magala</h2>
                  <p className="card_text">Elder Dragon</p>
                  <button className="btnLM card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={velkhanaIC} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Velkhana</h2>
                  <p className="card_text">
                    Elder Dragon
                  </p>
                  <button className="btnLM card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={rcgvalstraxIC} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Risen Valstrax</h2>
                  <p className="card_text">
                    Elder Dragon
                  </p>
                  <button className="btnLM card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={cgoreIC} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Chaotic Gore Magala</h2>
                  <p className="card_text">
                    ???
                  </p>
                  <button className="btnLM card_btn">Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Largemonsters;
