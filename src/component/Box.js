import React from 'react'
import './box.css'

export default function Box(props) {
  return (
    <>
     <div className="cont22">
        <div className="cont2p1">
            <h1>{props.t1}</h1>

        </div>
        <div className="cont2p2">
            <h3>{props.t2}</h3>

        </div>

    </div>
    <div className="cont11">
        <img src={props.imgS} alt="" />

    </div>
   

    </>
  )
}
