import React from 'react'
import './boxy.css'

export default function boxy(props) {
  return (
    <>
    <div className="cont11">
        <img src={props.imgT} alt="" />
        
    </div>
       <div className="cont22">
        <div className="cont2p1">
            <h1>{props.t1}</h1>

        </div>
        <div className="cont2p2">
            <h3>{props.t2}</h3>

        </div>

    </div>
 

    </>
  )
}

