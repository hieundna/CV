import './App.css';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p>All right reserved Hieu Nguyen @2020</p>
      </div>
      <div className="footer-social">
        <span><a href="https://facebook.com/hieu.orion.7"><i className="fa fa-facebook-official"></i></a></span>
        <span><a href="https://www.instagram.com/hieute98/"><i className="fa fa-instagram "></i></a></span>
        <span><i className="fa fa-github "></i></span>
      </div>
    </footer>
  );
}

export default Footer;
