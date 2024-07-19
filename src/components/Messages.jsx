import React from "react";
import "../assets/messages.css";
import College from "../assets/img/images (7).jpeg";

const Messages = () => {
  return (
    < div className="messages">
      <div className="heading-container-1">
        <h1 className="heading_1">College Heritage</h1>
      </div>
      <ul className="videos">
        <li className="videolist">
          <div className="videodiv">
            <iframe
              className="iframestyle"
              src="https://www.youtube.com/embed/6b3kQft5bsY?feature=shared"
              
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="directorbio">
            <div className="directorimg">
              <img className="image_1" src={College} alt="Director" />
            </div>
            <p className="bio">
              <span className="doctor">Government College of Engineering, Bargur</span> was established in the year 1994 to cater to the needs of people of Tamil Nadu.   The institution is working towards taking it to greater heights in the field of professional education, with a commitment to provide quality education to the Under Graduate students of ECE, CSE, EEE and Mechanical Engineering, and the Post Graduate students of Applied Electronics, Power Electronics and Drives and Computer Science and Engineering.  Our institution has the state-of-the-art infrastructure, outstanding faculty and valuable research programmes.  The institution is conferred with Autonomous status by UGC, Accredited by NBA (for ECE, EEE and CSE branches) and affiliated to Anna University.


            </p>
            <div className="info">
              <p className="name">
                
                <br className="desg" />
               
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Messages;
