import './App.css';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p>All right reserved Hieu Nguyen @2020</p>
      </div>
      <div className="footer-social">
        <span><a href="https://facebook.com/hieu.orion.7" target="_blank"><i className="fa fa-facebook-official"></i></a></span>
        <span><a href="https://www.instagram.com/hieute98/" target="_blank"><i className="fa fa-instagram "></i></a></span>
        <span><a href="https://github.com/hieundna" target="_blank"><i className="fa fa-github "></i></a></span>
      </div>
    </footer>
  );
}

export default Footer;
