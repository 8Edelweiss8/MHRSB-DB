import React from "react";
import Header from "./components/header";
import "./styles/style.css";
import MHRlogo from "./assets/img/MHRlogo.jpg";
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

      <section className="pagebg">
        <div>
          <div className="row">
            <div className="col-md-6 landingcardpadding">
              <div className="card shadow landingcardcolor1">
                <div className="card-header cardcolor1">
                  <h2 className="mb-4 mt-2">Replace text here</h2>
                </div>
                <div className="card-body scrollable landingcardcontent">
                  <label className="bluetext">{sampledata1}</label>
                </div>
              </div>
            </div>

            <div className="col-md-6 landingcardpadding">
              <div className="card shadow landingcardcolor2">
                <div className="card-header cardcolor2">
                  <h2 className="mb-4 mt-2">Replace text here</h2>
                </div>
                <div className="card-body landingcardcontent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
