import React , {useState} from 'react'
import "./boxy.css"

export default function Footer() {
const [lang, setlang] = useState("English");
  const handlelang = ()=>{
    if(lang == "English"){
      setlang("Hindi");
    }else{
      setlang("English")
    }
  }
  return (
    <>
    <div className="p1 container" style={{
        color:"rgb(158 153 153)"
        
    }}>
        Questions? call <a href="/">000-800-040-1843</a>

    </div>
    <div className="p2 container">
    <div class="container">
  <div class="row row-cols-4">
    <div class="col"> <a href="/">FAQ </a></div>
    <div class="col"> <a href="/">Help Centre</a></div>
    <div class="col"> <a href="/">Media Centre</a></div>
    <div class="col"> <a href="/">Account</a></div>
    <div class="col"> <a href="/">Investor Relations</a></div>
    <div class="col"> <a href="/">Jobs</a></div>
    <div class="col"> <a href="/">Ways to Watch</a></div>
    <div class="col"> <a href="/">Terms of Use</a></div>
    <div class="col"> <a href="/">Privacy</a></div>
    <div class="col"> <a href="/">Cookie Preferences</a></div>
    <div class="col"> <a href="/">Corporate Information</a></div>
    <div class="col"> <a href="/">Contact Us</a></div>
    <div class="col"> <a href="/">Speed Test</a></div>
    <div class="col"> <a href="/">Legal Notices</a></div>
    <div class="col"> <a href="/">Only on Netflix</a></div>
    
  </div>
</div>

    </div>
    <div className="p3 container">
    <button type="button" class="btn1 mx-3 " >
            {" "}
            <a
              class="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {lang}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/" onClick={handlelang}>English</a></li>
            <li><a class="dropdown-item" href="/" onClick={handlelang}>Hindi</a></li>
            
          </ul>
          
          </button>

    </div>
    <div className="p4 container" style = {{
        color:"rgb(158 153 153)"
    }}>
    Netflix India

    </div>
    </>
  )
}
