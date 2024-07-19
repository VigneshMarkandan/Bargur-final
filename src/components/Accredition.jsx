import React from 'react';
import '../assets/accredition.css';
import ambaLogo from '../assets/img/amba_logo.png'; // Update with the actual path to your image
import aacsbLogo from '../assets/img/aacsbLogo.png'; // Update with the actual path to your image

const Accreditation = () => {
  return (
    <div className="accreditation-container">
      <h2 className="accreditation-title">Accreditation</h2>
      <div className="accreditation-logos">
        <div className="accreditation-item">
          <img src={ambaLogo} alt="AMBA Accredited" className="accreditation-logo" />
          <p className="accreditation-description">
          The All India Council for Technical Education (AICTE) regulates and ensures quality in technical education institutions and courses across India.
          </p>
        </div>
        <div className="accreditation-item">
          <img src={aacsbLogo} alt="AACSB Member" className="accreditation-logo" />
          <p className="accreditation-description">
          The National Assessment and Accreditation Council (NAAC) evaluates and accredits higher education institutions in India, ensuring quality and standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
