import React from 'react'
import './texta.css'

function Textarea() {
    
  return (
    
    <>
    
    <div className="con1" >
        <h1><strong>Unlimited movies, TV shows and more.</strong></h1>
    

    </div>
    <div className="con2" >
        <h2>Watch anywhere. Cancel anytime.</h2>
         
   

    </div>
    <div className="con3" >
        <h3> Ready to watch? Enter your email to create or restart your membership.</h3>
       
    

    </div>
    <div className="con4">
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Email Address" aria-label="Search"/>
        <button class="btn2 btn-danger" type="submit">Get Started {">"}</button>
      </form>
    </div>
    </>
   
  )
}

export default Textarea
