import React from "react";
import Header from '../Header';
import Footer from '../Footer';

function Contact() {
  return(
    <div>
      <Header/>
      <div className="main-content">
        <div className="page-title">
          <h1>Resume</h1>
        </div>
        <div className="page-content">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="block-title">
                <h2>Education</h2>
                <div className="timeline">
                  <div className="timeline-item">
                    <h5>2016 - 2020</h5>
                    <span>Industrial University of Ho Chi Minh city</span>
                    <h4>Information Technology</h4>
                    <p>ở đây tau học được cách cấu hình router switch, được học cả LT lẫn TH hết sức xịn xò
                      Ai muốn học ib tau chỉ cho mà học
                    </p>
                  </div>
                  <div className="timeline-item">
                    <h5>2019</h5>
                    <span>VNPRO</span>
                    <h4>Certificate Cisco Network Associate</h4>
                    <p>ở đây tau học được cách cấu hình router switch, được học cả LT lẫn TH hết sức xịn xò
                      Ai muốn học ib tau chỉ cho mà học
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="block-title">
                <h2>Experience</h2>
                <div className="timeline">
                <div className="timeline-item">
                    <h5>2020</h5>
                    <span>LIKIPE</span>
                    <h4>Intern - ReactJS</h4>
                    <p>ở đây tau học được cách cấu hình router switch, được học cả LT lẫn TH hết sức xịn xò
                      Ai muốn học ib tau chỉ cho mà học
                    </p>
                  </div>
                  <div className="timeline-item">
                    <h5>2019</h5>
                    <span>Saigon Lab</span>
                    <h4>Intern - IT Help Desk</h4>
                    <p>ở đây tau học được cách cấu hình router switch, được học cả LT lẫn TH hết sức xịn xò
                      Ai muốn học ib tau chỉ cho mà học
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="block-title">
                <h2>Professional Skills</h2>
              </div>
              <div className="skill-infor">
                <div className="skill-title">
                  <h4>Creativity</h4>
                  <div className="skill-value">80%</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percent" style={{width: "80%"}}></div>
                </div>
                <div className="skill-title">
                  <h4>Communication</h4>
                  <div className="skill-value">55%</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percent" style={{width: "55%"}}></div>
                </div>
                <div className="skill-title">
                  <h4>Team Work</h4>
                  <div className="skill-value">90%</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percent" style={{width: "90%"}}></div>
                </div>
                <div className="skill-title">
                  <h4>Office</h4>
                  <div className="skill-value">45%</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percent" style={{width: "45%"}}></div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="block-title">
                <h2>Technical Skills</h2>
              </div>
              <div className="skill-infor">
                <div className="skill-title">
                  <h4>HTML5/CSS3</h4>
                  <div className="skill-value">80%</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percent" style={{width: "80%"}}></div>
                </div>
                <div className="skill-title">
                  <h4>Javascript</h4>
                  <div className="skill-value">55%</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percent" style={{width: "55%"}}></div>
                </div>
                <div className="skill-title">
                  <h4>ReactJS</h4>
                  <div className="skill-value">65%</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percent" style={{width: "65%"}}></div>
                </div>
                <div className="skill-title">
                  <h4>SQL</h4>
                  <div className="skill-value">50%</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percent" style={{width: "50%"}}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;