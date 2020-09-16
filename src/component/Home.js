import React, { useState, useRef } from 'react';
import cover from '../cover1.jpg';
import likipe from '../likipe.png';
import saigonlab from '../saigonlab.png';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Header from '../Header';
import Footer from '../Footer';

function Home() {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    customPaging: ((i) => <span></span>),
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  return (
    <div>
      <Header/>
      <div className="main-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="row banner-content">
              <div className="col-sm-12 col-md-5 col-lg-5">
                <div className="img-cover">
                  <img src={cover} style={{width: "100%", height: "auto"}}/>
                </div>
              </div>
              <div className="col-sm-12 col-md-7 col-lg-7">
                <div className="introduce">
                  <h5 style={{color: "#aaa", fontWeight: "300", fontSize: "16px"}}>Front-end Developer</h5>
                  <h1>Hieu Nguyen</h1>
                  <p> Hiếu vip pro tkna nguyễn 123 địt mẹ hay vãi lồn luôn đấy hiểu không . Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                  <div className="home-buttons">
                    <Link className="btn btn-primary" to="/about"> View Resumé</Link>
                    <Link className="btn btn-secondary" to="/contact"> Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h2>What I Do</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="infor-block">
              <div className="ci-icon">
                <i className="fa fa-shopping-bag"></i>
              </div>
              <div className="ci-text">
                <h4>Web Developer</h4>
                <p>
                  blab lbab lbalblb lbalb lbablba blab blablb blablb hiếu vip pờ rồ nhà mô nô cô
                  labb abl alb lablb alblbl blab lab lbablabl blabl balb alb albalb lab al
                </p>
              </div>
            </div>
            <div className="infor-block">
              <div className="ci-icon">
                <i className="fa fa-bullhorn"></i>
              </div>
              <div className="ci-text">
                <h4>Web Design</h4>
                <p>
                  blab lbab lbalblb lbalb lbablba blab blablb blablb 
                  labb abl alb lablb alblbl blab lab lbablabl blabl balb alb albalb lab al
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="infor-block">
              <div className="ci-icon">
                <i className="fa fa-pencil"></i>
              </div>
              <div className="ci-text">
                <h4>Web Developer</h4>
                <p>
                  blab lbab lbalblb lbalb lbablba blab blablb blablb 
                  labb abl alb lablb alblbl blab lab lbablabl blabl balb alb albalb lab al
                </p>
              </div>
            </div>
            <div className="infor-block">
              <div className="ci-icon">
                <i className="fa fa-television"></i>
              </div>
              <div className="ci-text">
                <h4>Web Design</h4>
                <p>
                  blab lbab lbalblb lbalb lbablba blab blablb blablb 
                  labb abl alb lablb alblbl blab lab lbablabl blabl balb alb albalb lab al
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h2>Company</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <Slider {...settings}>
              <div>
                <a href="https://likipe.se/">
                  <img src={likipe} alt="LIKIPE" width="70px" style={{display: "inline-block"}} />
                </a>
              </div>
              <div>
                <a href="https://saigonlab.edu.vn/">
                  <img src={saigonlab} alt="Saigonlab" width="100px" style={{display: "inline-block"}} />
                </a>
              </div>
            </Slider>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h2>Fun Facts</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="fun-fact-block">
              <i className="fa fa-bicycle"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
