import React from 'react'
import {GoDotFill} from "react-icons/go"
import { AiFillStar } from "react-icons/ai";
import pfp from "../ass/pfp.png"
import graph1 from "../ass/graph1.png"
const week = () => {
  return (

    <div className="week">


        
            <h2>Employee Of The Week 🎖️</h2>

            <div className="employee">
                <img src={pfp} alt="" />
                <div id="txt">
                    <h5>Salmi Siffedine</h5>
                    <div className="status">
            <span><GoDotFill/></span>
          <p className="status">Disponible</p>

          </div>                </div>
            </div>

            <div className="cards">
                <div className="orders">
                    <p>Orders</p>
                    <p id='num'>127</p>

                </div>
                <div className="rate">
                    <p>Rating</p>
                    <React.Fragment >
              <p id="num">4.1{" "} <span>
                <AiFillStar />
              </span></p>
              
            </React.Fragment>
                    

                </div>

            </div>
            <img id='graph1' src={graph1} alt="" />
        </div>
    
  )
}

export default week