import React from 'react'
import companyImg from '../assets/img/companies.png'
import '../assets/recruiters.css'
import companyLogos from '../assets/img/companies-sp.png'


const Recruiters = () => {
  return (
   <div className='recruiters'>
     <div className='recruiters-grid'>
        <div className='heading'>Our Prime Recruiters <br /> GCE-BARGUR</div>
        <div className='company-images'>
            <img src={companyImg} alt="companyImg" className='img1'/>
            <img src={companyLogos} alt="companyImg" className='img2'/>
        </div>
    </div>
   </div>
  )
}

export default Recruiters