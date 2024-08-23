import { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Carousel from "./components/Carousel/corousel";
import greetings from "./Data/greetings";
import GreetingCard from "./components/greetingCard";
import { Link } from "react-router-dom";

function createGreeting(greeting) {
  return (
    <GreetingCard
      key={greeting.id}
      src={greeting.greetingImage}
      info={greeting.greetingInfo}
      infoBy={greeting.greetingInfoBy}
    />
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-page-content">
        <Navbar></Navbar>
        <Hero />
      </div>
      <h1 className="recent-greetings-heading">Best Memories Together</h1>
      <iframe
        style={{ textAlign: "center", position: "relative", top: "-40px" }}
        src="https://lottie.host/embed/43a74456-6f25-44d4-9056-2fb0fadd5fe0/ZkNNZzJtM6.json"
      ></iframe>
      <div className="slider-container" data-bs-ride="carousel">
        <div className="row h-100">
          <div id="carouselExample" class="carousel slide h-100">
            <div class="carousel-inner h-100">
              <Carousel
                state="active"
                image1="/images/photo-2.jpeg"
                image2="/images/photo-1.jpeg"
                year="2019"
              ></Carousel>
              <Carousel
                state=""
                image1="/images/photo-3.jpeg"
                image2="/images/photo-4.jpg"
                year="2020"
              ></Carousel>
              <Carousel
                state=""
                image1="/images/photo-5.jpeg"
                image2="/images/photo-6.jpeg"
                year="2021"
              ></Carousel>
              <Carousel
                state=""
                image1="/images/photo-7.jpg"
                image2="/images/photo-8.jpeg"
                year="2022"
              ></Carousel>
              <Carousel
                state=""
                image1="/images/photo-9.jpg"
                image2="/images/photo-1.jpeg"
                year="2023"
              ></Carousel>
              <Carousel
                state=""
                image1="/images/photo-4.jpg"
                image2="/images/photo-5.jpeg"
                year="2024"
              ></Carousel>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                style={{ backgroundColor: "black", borderRadius: "5px" }}
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                style={{ backgroundColor: "black", borderRadius: "5px" }}
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
            <div className="ribbon_lottie">
              <iframe
                style={{ width: "100%", height: "100%" }}
                src="https://lottie.host/embed/f56360de-ce34-40e5-a0dd-8e5122ffa8f2/MDtPd8oKnu.json"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <h1 className="recent-greetings-heading">Gallery</h1>
      <iframe
        style={{ textAlign: "center", position: "relative", top: "-40px" }}
        src="https://lottie.host/embed/43a74456-6f25-44d4-9056-2fb0fadd5fe0/ZkNNZzJtM6.json"
      ></iframe>

      <div
        className="infinite-slider"
        style={{ position: "relative", top: "-90px" }}
      >
        <div className="slide-track-1">
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-1.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-2.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-3.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-4.jpg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-5.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-6.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-7.jpg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-8.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-9.jpg"
              alt="Infinite Slider"
            />
          </div>

          {/* Same Slides */}

          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-1.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-2.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-3.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-4.jpg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-5.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-6.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-7.jpg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-8.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-9.jpg"
              alt="Infinite Slider"
            />
          </div>
        </div>
      </div>
      <div
        className="infinite-slider"
        style={{ position: "relative", top: "-80px" }}
      >
        <div className="slide-track-2">
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-1.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-2.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-3.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-4.jpg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-5.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-6.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-7.jpg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-8.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-9.jpg"
              alt="Infinite Slider"
            />
          </div>

          {/* Same Slides */}

          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-1.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-2.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-3.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-4.jpg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-5.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-6.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-7.jpg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-8.jpeg"
              alt="Infinite Slider"
            />
          </div>
          <div className="infinite-slide">
            <img
              className="infinite-image"
              src="/images/photo-9.jpg"
              alt="Infinite Slider"
            />
          </div>
        </div>
      </div>

      <h1 className="recent-greetings-heading">Recent Greetings</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link className="home-create-greeting py-2 px-3" to="/sendGreetings">
          Create A Greeting
        </Link>
      </div>
      <iframe
        style={{ textAlign: "center", position: "relative", top: "-30px" }}
        src="https://lottie.host/embed/43a74456-6f25-44d4-9056-2fb0fadd5fe0/ZkNNZzJtM6.json"
      ></iframe>

      <div className="container" style={{ position: "relative", top: "-70px" }}>
        <div className="row">{greetings.map(createGreeting)}</div>
      </div>
    </>
  );
}

export default App;
