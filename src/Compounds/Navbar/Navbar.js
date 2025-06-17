import React from "react";
import Drop from "./Drop/Drop.js";
import "./Navbar.css";

const Navbar = ({ setHide }) => {
  return (
    <nav className="navBar">
      <div id="navContentDiv">
        <div id="firstOne">
          {/* <div id="displayMedia" >
                <img className="hideNow" id="sizingImg" src="https://shop.drivemedical.com/_ui/responsive/common/images/Drive_DeVilbiss_logo.png" alt="img"/>
               </div> */}
          <div
            id="firstOneFirstDiv"
            onClick={() => setHide((prev) => (prev === false ? true : false))}
          >
            {/* <img
              src="https://shop.drivemedical.com/_ui/responsive/common/images/Drive_DeVilbiss_logo.png"
              alt="img"
            /> */}
            <img
              className="gapBtw"
              id="americanLogo"
              src="https://shop.drivemedical.com/_ui/responsive/common/images/flag.png"
              alt="flag"
            />
            <h4 id="usen" className="gapBtw">
              US EN
            </h4>
            <i className="hamani gapBtw fa-solid fa-angle-down"></i>
          </div>

          <div id="firstOneSecoundDiv">
            <a
              href="https://www.google.com/maps/@30.4380174,-84.3038144,17z?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              {/* <i className="gapBtw fa-solid fa-location-dot"></i> */}
              <p className="gapBtw">Locate Providers</p>
            </a>
          </div>

          <div id="firstOneThirdDiv">
            <a href="https://chatgpt.com/" target="_blank">
              <i className="gapBtw fa-solid fa-comment-dots"></i>
              <h3 className="chatMe gapBtw">chat</h3>
            </a>
          </div>

          <p id="inspiredOne" className="gapBtw">
            Inspired By Drive
          </p>
        </div>

        <div id="secoundOne">
          <i id="menuDrop" class="fa-solid fa-bars"></i>
          <div id="secoundOneFirstDiv">
            <i className=" fa-solid fa-box-archive"></i>
            <p className="justOrder ">Order Status</p>
          </div>
          <div id="secoundOneSecoundDiv">
            <i className=" fa-solid fa-user"></i>
            <p className="justOrder ">Sign In</p>
          </div>
          <div id="secoundOneThirdDiv">
            <i className=" fa-solid fa-cart-shopping"></i>
            <p className="justOrder ">cart</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
