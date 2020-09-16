import './App.css';
import React, { useState, useEffect} from 'react';
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './logo2.png';

function Header(props) {
    const [current, setCurrent] = useState({home: "", about: "", contact: ""});
    let path = props.location.pathname.slice(1,props.location.pathname.length);
    const onSelected = () => {
      if(path===""){
        setCurrent({home: "actived", about:"", contact: ""});
      }
      else if(path==="about"){
        setCurrent({home: "", about:"actived", contact: ""});
      }
      else{
        setCurrent({home: "", about:"", contact: "actived"});
      }
    };
    useEffect(onSelected,[current.home]);
    return (
      <header className="header">
        <div className="navbar-menu">
        <Navbar expand="md">
          <Navbar.Brand>
            <Link to="/"><img src={logo} style={{maxWidth: "180px", maxHeight: "60px"}} /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className={"nav-link " + current.home}>Home</Link>
              <Link to="/about" className={"nav-link " + current.about}>About</Link>
              <Link to="/contact" className={"nav-link " + current.contact}>Contact</Link>
              <NavDropdown title="Form" id="basic-nav-dropdown">
                <Link to="/contact" className="dropdown-item">Contact</Link>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </header>

    );
}

export default withRouter(Header);
