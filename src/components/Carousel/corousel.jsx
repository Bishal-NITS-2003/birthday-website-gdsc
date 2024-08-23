import React from "react";
import "./corousel.css";

function Carousel(params) {
  return (
    <>
      <div class={"carousel-item h-100 " + params.state}>
        <div className="row d-flex flex-row justify-content-center align-items-center"></div>
        <div className="row d-flex flex-row justify-content-center align-items-center h-100">
          <div className="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center h-100 position-relative">
            <div
              className="slider-image-background"
              style={{
                zIndex: "1",
                backgroundColor: "#4DEADC",
                transform: "rotate(10deg)",
                border: "2px solid #2a827a",
              }}
            ></div>
            <div
              className="slider-image-background"
              style={{
                zIndex: "2",
                backgroundColor: "#FEE695",
                transform: "rotate(5deg)",
                border: "2px solid #9c8a4e",
              }}
            ></div>
            <div
              className="slider-image-background"
              style={{
                zIndex: "3",
                backgroundColor: "#F4AFDB",
                transform: "rotate(-10deg)",
                border: "2px solid #b582a3",
              }}
            ></div>
            <img
              className="slider-image-1"
              src={params.image1}
              alt="Slider Image 1"
            />
          </div>
          <div className="col-lg-2 col-sm-12 d-flex flex-column justify-content-center align-items-center m-0 p-0">
            <h1 className="slider-title m-0">
              Best of <br></br>
              <span className="slider-title-year">{params.year}</span>
            </h1>
          </div>
          <div className="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center">
            <div
              className="slider-image-background"
              style={{
                zIndex: "1",
                backgroundColor: "#4DEADC",
                transform: "rotate(10deg)",
                border: "2px solid #2a827a",
              }}
            ></div>
            <div
              className="slider-image-background"
              style={{
                zIndex: "2",
                backgroundColor: "#FEE695",
                transform: "rotate(5deg)",
                border: "2px solid #9c8a4e",
              }}
            ></div>
            <div
              className="slider-image-background"
              style={{
                zIndex: "3",
                backgroundColor: "#F4AFDB",
                transform: "rotate(-10deg)",
                border: "2px solid #b582a3",
              }}
            ></div>
            <img
              className="slider-image-2"
              src={params.image2}
              alt="Slider Image 2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
