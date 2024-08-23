import React from "react";


function GreetingHeader(props){
   
   function openModel(){
         props.modelFunction("flex")
   }


    return <>
    <div className="container px-5" style={{width: "100%"}}>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
      
      <iframe className="d-block mx-lg-auto img-fluid" src="https://lottie.host/embed/750f5078-6e5f-4d81-9fd2-de0002375b10/reBB0WIVOw.json" style={{width:"100%", height:"500px"}}></iframe>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-light lh-1 mb-3">Let's Celebrate His/Her Birthday with Greeting Cards</h1>
        <p className="lead text-light">Create a unique and heartfelt greeting card to celebrate [Friend's Name]'s special day. Choose from beautiful designs, add your personal touch, and make their birthday truly memorable.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button onClick={openModel} type="button" className="btn btn-outline-light btn-lg px-4">Create Card</button>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default GreetingHeader;