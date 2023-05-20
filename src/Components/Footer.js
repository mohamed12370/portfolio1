import React from 'react';

export default function Footer() {
  return (
    <div id="footer">
      <div className="container one">
        <div className="row">
          <div className="col-md-6">
            <p>See My Projects At Once & Leave Here Your E-mail Address</p>
          </div>
          <div className="col-md-6">
            <div className="foot-email">
              <input type="email" placeholder="Email" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container two">
        <h2>Portfolio</h2>
        <div className="foot-icon">
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/mohamed-mostafa-2448411a9/"
              target="_blank"
              className="icon"
            >
              <i className="fab fa-linkedin-in "></i>
            </a>
            <a
              href="https://github.com/mohamed12370"
              target="_blank"
              className="icon"
            >
              <i className="fab fa-github "></i>
            </a>
            <i className="fab fa-instagram"></i>
          </div>
          <p>
            {' '}
            -- copyrights &copy; 2023 -- All Rights Reserved here By{' '}
            <span>Mohamed Mostafa</span>
          </p>
        </div>
      </div>
    </div>
  );
}
