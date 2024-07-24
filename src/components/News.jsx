import React from "react";
import news1 from '../assets/img/news1.jpeg';
import news2 from '../assets/img/news2.jpeg';
import news3 from '../assets/img/news3.jpeg';

const News = () => {
  return (
    <>
      <div className="style-0">
        <h2 className="style-1">Latest News</h2>
        <ul className="style-3">
          <li className="style-4">
            <div className="style-5">
              <img
                className="style-7"
                alt=""
                src={news1}
                data-loaded="true"
              />
              <div className="blocks">
                <p>Jan 15, 2024</p>
                <h3>TEQIP -III SPONSORED  (EVENT) "Enhancing technical education quality through strategic improvements." </h3>
                <button>Read More &gt;</button>
              </div>
            </div>
          </li>
          <li className="style-9">
            <div className="style-10">
              <img
                className="style-12"
                src={news2}
                data-loaded="true"
                alt="image1"
              />
              <div className="blocks">
                <p>Oct 15, 2024</p>
                <h3>"Youth Awakening Day" Dr. A.P.J. Abdul Kalam's Birth Anniversary Rally, follow Dr. Kalam's visionary path."</h3>
                <button>Read More &gt;</button>
              </div>
            </div>
          </li>
          <li className="style-14">
            <div className="style-15">
              <img
                className="style-12"
                src={news3}
                data-loaded="true"
                alt="imge2"
              />
              <div className="blocks">
                <p>May 19, 2024</p>
                <h3>GCEB Kho-kho Team Secure Runner Up in Anna University Sports Board Zone-VII Kho-kho(men) Tournament</h3>
                <button>Read More &gt;</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
