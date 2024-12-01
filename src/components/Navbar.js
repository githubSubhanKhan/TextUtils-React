import React from 'react'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme === 'red' || props.theme === 'green' || props.theme === 'dark' ? 'dark' : 'light'} bg-${props.theme === 'red' || props.theme === 'green' || props.theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
            {/* <li className="nav-item"> */}
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            {/* </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          {/* </ul> */}
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          {/* <div className="form-check form-check-inline" style={{color: props.theme === 'dark' || props.theme === 'red' || props.theme === 'green' ? 'white' : ''}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={props.redTheme}/>
              <label className="form-check-label" htmlFor="inlineRadio1">Enable Red Theme</label>
          </div>
          <div className="form-check form-check-inline" style={{color: props.theme === 'dark' || props.theme === 'red' || props.theme === 'green' ? 'white' : ''}}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={props.greenTheme}/>
              <label className="form-check-label" htmlFor="inlineRadio2">Enable Green Theme</label>
          </div> */}
          <div className={`form-check form-switch text-${props.theme === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.theme === 'light' ? 'dark' : 'light'} Theme</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
