import React from 'react'
import Navbar from './navbar'
import Table from './Table'
import {GoDotFill} from "react-icons/go"
import { AiFillStar } from "react-icons/ai";
import Week from "./week";
import Perfo from "./perfo"
function Stats() {
  return (
    <div className='stats'>
      <Navbar />
        <div className='statss'>
        <Week/>
        <Perfo/>


        




        </div>
        <Table className="stats-table"/>
    </div>
  )
}

export default Stats