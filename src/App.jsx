import React from "react";
import Header from "./components/header";
import "./styles/style.css";

function App() {
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
              <h1 className="bluetext">Monster Hunter Rise: Sunbreak</h1>
              <h2 className="bluetext">Database</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
