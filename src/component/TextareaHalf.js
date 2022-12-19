import React from 'react'


export default function TextareaHalf() {
  return (
   <>
    <div className="con3" >
        <h3> Ready to watch? Enter your email to create or restart your membership.</h3>
       
    

    </div>
    <div className="con4" style = {{
        marginLeft : "26vw"
    }}>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Email Address" aria-label="Search"/>
        <button class="btn2 btn-danger" type="submit">Get Started {">"}</button>
      </form>
    </div>
   </>
  )
}
