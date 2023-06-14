// import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Navbar(props) {

  

  // const toggleText = () =>{
  //   if(props.mode2 === 'light'){
  //     ('Enable Dark Mode')
  //   }else if(props.mode2 === 'dark'){
  //     ('Enable Light Mode')
  //   }
  // }

  return (<>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode2} bg-${props.mode2}`}>
  <div className="container-fluid">
    <Link className="navbar-brand active" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">{props.about}</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>

      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2 border" onClick={()=>{props.toggleMode2('primary')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2 border" onClick={()=>{props.toggleMode2('danger')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-info rounded mx-2 border" onClick={()=>{props.toggleMode2('info')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2 border" onClick={()=>{props.toggleMode2('warning')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2 border" onClick={()=>{props.toggleMode2('success')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2 border" onClick={()=>{props.toggleMode2('light')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-dark rounded mx-2 border" onClick={()=>{props.toggleMode2('dark')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
      </div> */}
      
    </div>
  </div>
  <div className={`form-check form-switch text-${props.mode2==='dark'?'white':'dark'} `}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode2(null)}}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.sw2Text}</label>
</div>
</nav>
</>
  )
}

export default Navbar;

//Proptypes written

Navbar.propTypes = {title:PropTypes.string.isRequired,
about: PropTypes.string.isRequired}

//default Props
Navbar.defaultProps = {
  title: `Set title here:`,
  about: `About text here`
}
