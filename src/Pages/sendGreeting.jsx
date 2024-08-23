import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar/navbar";
import GreetingCard from "../components/greetingCard";
import greetings from "../Data/greetings";
import GreetingHeader from "../components/greetingHero";

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

function SendGreetings() {
  const [modelImage, setModelImage] = useState("greeting-1.png");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [charCount, setCharCount] = useState("0");
  const [items, setItems] = useState(greetings);
  const [modelState, setmodelState] = useState("none");

  function descriptionChange(event) {
    setDescription(event.target.value);
    setCharCount(event.target.value.length);
  }

  function addItem() {
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: prevItems.length + 2,
          greetingImage: modelImage,
          greetingInfo: description,
          greetingInfoBy: name,
        },
      ];
    });
    setmodelState("none");
    setModelImage("greeting-1.png");
    setName("");
    setDescription("");
  }

  // function addCard(){
  //     setItems(prevItems => {
  //         return [...prevItems, inputText];
  //       });

  // }

  return (
    <>
      <div className="greeting-page-body">
        <Navbar></Navbar>
        <GreetingHeader modelFunction={setmodelState}></GreetingHeader>
        <h1 className="recent-greetings-heading">Recent Greetings</h1>
        <div className="underline-animation">
          <iframe
            style={{ textAlign: "center" }}
            src="https://lottie.host/embed/43a74456-6f25-44d4-9056-2fb0fadd5fe0/ZkNNZzJtM6.json"
          ></iframe>
        </div>
        {/* <div className="d-flex flex-column justify-content-center align-items-center header-greetings ">
        <h1>Create a unique and heartfelt greeting card to celebrate Janjyoti's special day.</h1>
        <p>Choose from beautiful designs, add your personal touch, and make their birthday truly memorable.</p>
    </div> */}

        <div className="container">
          <div className="row">{items.map(createGreeting)}</div>
        </div>

        <div class="greeting-modal" style={{ display: modelState }}>
          <div class="container modal-content pb-0">
            <div className="row">
              <div className="col-10">
                <h2 className="greeting-model-heading">Create Greeting Card</h2>
              </div>
              <div
                onClick={() => setmodelState("none")}
                className="col-2 close mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  fill="currentColor"
                  className="bi bi-x-lg close mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="greeting-model-image my-3">
                  <img
                    className="greeting-image rounded"
                    src={modelImage}
                    alt="Greeting Image"
                  />
                  <p className="greeting-info mx-3">{description}</p>
                  <p className="greeting-info-by mx-3 mt-3">- {name}</p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="d-flex flex-column form">
                  <label
                    className="mx-1 mb-2"
                    htmlFor="name"
                    style={{ color: "whitesmoke" }}
                  >
                    Name:
                  </label>
                  <input
                    onChange={(event) => setName(event.target.value)}
                    className="border rounded px-2"
                    name="name"
                    style={{
                      background: "transparent",
                      color: "whitesmoke",
                      height: "40px",
                    }}
                    type="text"
                    value={name}
                    placeholder="James Bond"
                    maxlength="50"
                    required
                  />
                  <label
                    className="mx-1 mb-2 my-4"
                    htmlFor="description"
                    style={{ color: "whitesmoke" }}
                  >
                    Description:
                  </label>
                  <textarea
                    onChange={descriptionChange}
                    id="textInput"
                    className="border rounded px-2"
                    name="description"
                    style={{
                      background: "transparent",
                      color: "whitesmoke",
                      height: "100px",
                      overflowY: "auto",
                      resize: "none",
                    }}
                    value={description}
                    placeholder="You are the best person I have ever met....."
                    maxLength="229"
                    required
                  />
                  <p className="mt-2" style={{ color: "grey" }} id="charCount">
                    {charCount}/229 characters
                  </p>
                  <label
                    className="mx-1 mt-2"
                    htmlFor="selectCard"
                    style={{ color: "whitesmoke" }}
                  >
                    Select Card:
                  </label>
                  <div className="row mt-1">
                    <div className="col-lg-4 col-sm-6 mt-3">
                      <img
                        onClick={(event) => setModelImage(event.target.src)}
                        className="rounded"
                        src="/images/greeting-1.png"
                        width={"100%"}
                      />
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-3">
                      <img
                        onClick={(event) => setModelImage(event.target.src)}
                        className="rounded"
                        src="/images/greeting-2.png"
                        width={"100%"}
                      />
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-3">
                      <img
                        onClick={(event) => setModelImage(event.target.src)}
                        className="rounded"
                        src="/images/greeting-3.png"
                        width={"100%"}
                      />
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-3">
                      <img
                        onClick={(event) => setModelImage(event.target.src)}
                        className="rounded"
                        src="/images/greeting-4.png"
                        width={"100%"}
                      />
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-3">
                      <img
                        onClick={(event) => setModelImage(event.target.src)}
                        className="rounded"
                        src="/images/greeting-5.png"
                        width={"100%"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 modal-footer">
              <button
                onClick={addItem}
                className={
                  "post-card-btn btn btn-warning " +
                  (name ? (description ? "" : "disabled") : "disabled")
                }
              >
                Post Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendGreetings;
