import React from 'react'
import { AiFillStar } from "react-icons/ai";

const Order = (props) => {
  return (
    <tr className='order'>
    <td id='id'>23131{props.price}</td>
    <td><div className="profile"><img  src={props.image2} alt="" /> {props.deliverer}</div></td>
    <td><div className="profile"><img  src={props.image1} alt="" /> {props.client}</div></td>
    <td>{props.hour} <br /> 12:0</td>
    <td>{props.price}<br /> paid</td>
    <td>{props.rating} <span><AiFillStar/></span> </td>
    <td id='status'><p>delivered</p></td>
  </tr>
  )
}

export default Order;