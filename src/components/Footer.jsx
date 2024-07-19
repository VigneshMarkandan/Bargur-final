import React from 'react';
import '../assets/footer.css';
import iimLogo from '../assets/img/iim_logo.png'
import facebook from '../assets/img/icon-facebook.svg'
import linkedIn from '../assets/img/icon-linkedin.svg'
import insta from '../assets/img/icon-insta.svg' 
import youtube from '../assets/img/icon-youtube.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-inside'>
         <div className='footer-logo'>
           <img src={iimLogo} alt="IIM" />
           <h1>GCE-BARGUR</h1>
         </div>
         <div className='footer-content'>
          <ul>
            <li>
              <p>Lige @ GCEB</p>
              <article>Corporate Relationship</article>
              <article>GCEB Alumni</article>
              <article>Reach GCEB</article>
              <article>Virtual Tour</article>
            </li>
            <li>
            <p>Downloads</p>
              <article>Application for Transfer and Readmissing 2012-22</article>
              <article>Curriculum and Syllabi</article>
              <article>Forms For Faculty and Staffs </article>
              <article>Video Lectures</article>
              <article>More Files</article>
            </li>
            <li>
            <p>Quick Links</p>
              <article>First Years Admission 2023 Circular with fee structure </article>
              <article>Student Verification Procedure</article>
              <article>AICTE Recommended List of Books</article>
              <article>Online Grievance Redressal</article>
            </li>
            <li>
            <p>Contact Us</p>
              <p className='contact-text'>Government College of Engineering,<br />
               NH 46, Chennai Bangalore Highway <br />
               Bargur <br />
               Krishnagiri -635104 <br />
               Tamil Nadu
              </p>
            </li>
          </ul>
         </div>
      </div>
      <ul className="footer-sns">
			<li className="footer-sns__item"><a href="/" target="_blank" rel="noopener noreferrer">
					<img className="lozad" src={insta} width="38" height="38" alt="instagram" decoding="async" /></a></li>
			<li className="footer-sns__item"><a href="/" target="_blank" rel="noopener noreferrer">
					<img className="lozad" src={linkedIn} width="38" height="38" alt="linkedin" decoding="async" /></a></li>
			<li className="footer-sns__item"><a href="/" target="_blank" rel="noopener noreferrer">
					<img className="lozad" src={facebook} width="38" height="38" alt="facebook" decoding="async" /></a></li>
			<li className="footer-sns__item"><a href="/" target="_blank" rel="noopener noreferrer">
					<img className="lozad" src={youtube} width="38" height="38" alt="youtube" decoding="async" /></a> </li>
          <h3>follow us</h3>
           
		</ul>
      <p className='footer-outside'>&copy; 2024 GCE - Bargur. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
