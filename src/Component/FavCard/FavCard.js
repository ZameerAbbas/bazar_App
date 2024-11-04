import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from "react-icons/bi"

import {Maincontainer} from "./FavCarElement"
const FavCard = () => {
  return (
    <div>
     <Link to="/"  style={{textDecoration:"none",color:"black",fontWeight:"700"}} ><BiArrowBack /> <span>Home</span></Link>
          <Maincontainer>
             main cont
          </Maincontainer>
    </div>
  )
}

export default FavCard
