import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faShip,
  faArrowRight,faBriefcase,faHeadset,faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import header from "./shipmate.png"
import footer from "./footer.png"





const Header = () => {

  const [text,settext]=useState("Login");
  const [text1,settext1]=useState("Register");

  function handleclick(){
    settext("$")

  }
  function handleclick1(){
    settext1("Track Shipment")

  }

  







  return (
    <div>
      <div className="con">
        <div className="containers">
          <img
            className="img1"
            src={header}
            alt="shipmate"
          />
        </div>
        <div className="containers2">
          <button onClick={handleclick} className="btn">{text}</button>
          <button onClick={handleclick1} className="btn">{text1}</button>
        </div>
      </div>

      <div className="text">
        <h1 className="text1">
          hassle-Free-Shipping Solutions<br></br>
        </h1>

        <p className="text2">
          Compare,book and manage your freight across the world's top logistics
          providers,all on one platform
        </p>
      </div>

      <div className="origin">
        {/* <div className="ori"> */}
        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
        <span className="gap">Origin,Port,City</span>
        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
        <span className="gap"> Destination,Port,City</span>
        <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
        <span className="gap"> 20 April 2023</span>
        <FontAwesomeIcon icon={faShip} />
        <span className="gap">Load</span>
        <FontAwesomeIcon icon={faArrowRight} />
        {/* </div> */}
      </div>
      <div className="services">
        <h1>Services</h1>
      </div>

      {/* cards from here */}

      <div className="cards2">

      <div className="cards">
        <div className="card" style={{  width: "20rem",height: "13rem" }}>
          <div className="card-body mx-2 my-3">
            <h5 className="card-title"><FontAwesomeIcon icon={faShip} /> <span className="mx-3"> freight Services</span><hr/></h5>
           
            <p className="card-text">
             Open new opportunities to grow your business.Enter new markets and discover new continents ,We are with you ,door-to-door 
            </p>
            
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card" style={{ width: "20rem",height: "13rem" }}>
          <div className="card-body mx-2 my-3">
            <h5 className="card-title"><FontAwesomeIcon icon={faBriefcase} /><span className="mx-3">  Business Services</span><hr/></h5>
            
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
           
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card" style={{  width: "20rem",height: "13rem" }}>
          <div className="card-body mx-2 my-3">
            <h5 className="card-title"><FontAwesomeIcon icon={faGlobe} /><span className="mx-3">Shipping and Logistics</span><hr/></h5>
           
            <p className="card-text">
              Find powerful solutions to meet your diverse transportation needs.Agile solutions to handle all your supply chain needs.
            </p>
           
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card" style={{  width: "20rem",height: "13rem" }}>
          <div className="card-body mx-2 my-3">
            <h5 className="card-title"><FontAwesomeIcon icon={faHeadset} /><span className="mx-3">24/7 Support</span><hr/></h5>
           
            <p className="card-text">
             receive support from our experts all over the world at every stage of the process 24/7
            </p>
          
          </div>
        </div>
      </div>
      </div>



      {/* footer */}
      <div className="containers3">
        <img className="img2" src={footer} alt="" />
      </div>


      
    </div>
  );
};

export default Header;
