import React from 'react';
import './portf.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons from React Icons

const Portf = () => {
  return (
    <div className="port-div">
      <div className="port-header">
        Priyanka T
      </div>
      <div className="port-content">
        <div className="port-left">
          <div className="port-subcontent">
            <h1>Hey, I’m</h1>
            <h3 className="port-h3">PRIYANKA T</h3>
            <div className="port-p">
              <p>A passionate Full-Stack Python Developer creating dynamic web applications with cutting-edge technology.</p>
            </div>
            <div className="port-so">
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={30}  style={{color:'white'}}/> {/* LinkedIn Icon */}
              </a>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram size={30}  style={{color:'white'}}/> {/* Instagram Icon */}
              </a>
             
            </div>
            <button className='port-button'>DOWNLOAD CV</button>
          </div>
        </div>
        <div className="port-right">
          <img src="src/assets/images/profile-pic.png" alt="Profile" className="port-image" />
          <div className="port-experience">
  <h1 className='exp1'>
    2 + <span className='exps'>YEARS OF</span>
    <br />
    <span className='exps'>EXPERIENCE</span>
  </h1>
</div>

          <div className="port-experience2">
          <h1 className='exp1'>
    7 + PROJECTS
  </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portf;
