import { IoCallOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { BiSolidMap } from "react-icons/bi";
import {GoDotFill} from "react-icons/go"
import moto from '../ass/moto.png';


function User(props) {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <button onClick={toggleDiv} className="user-container">
      {showDiv && (
        <div className="details_container">
          <div id="info">
            <div className="info_txt">
               <p>Order number {1}</p>
            <h2>{props.id}</h2>
            <p>Food Materials</p>


            </div>
            <img alt="" src={moto}/>
          </div>
          <hr />
          <div className="destination">
            <div className="retour">
              <span>
                <FaDotCircle />
              </span>
              <div className="des_txt">
                <h3>2972 Westheimer</h3>
                <p>Rd, Santa Ana n lilinois 58387</p>
              </div>
            </div>

            <div className="vertical-line"></div>
            <br />

            <div className="aller">
              <span id="map-icon">
                <BiSolidMap />
              </span>
              <div className="des_txt">
                <h3>8520 Preston</h3>
                <p>Rd. Inglewood 49583</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      )}
      <br />

      <div className="con">
        <img
          src={props.image}
          alt=""
        />
        <div className="details">
          <div className="status">
            <span><GoDotFill/></span>
          <p className="status">{props.num}</p>

          </div>
          <h4>{props.name}</h4>
          <div className="rating">
            <div className="fle">
              <h5>{props.rating}</h5>{"   "}
              <span>
                <AiFillStar size={14}/>
              </span>
            </div>
          </div>
        </div>
        <div className="icons">
        <button>
          <IoCallOutline />
        </button>
        <button>
          <BiMessageAltDetail />
        </button>
      </div>
      </div>

      
    </button>
  );
}

export default User;