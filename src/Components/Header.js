import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Header() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="header-content">
              <p>Welcome All In My Portfolio</p>
              <h1>Hi! I'm Mohamed Mostafa ALi,</h1>
              <h3>
                <span>{text}</span>
                <span style={{ color: 'red' }}>
                  <Cursor />
                </span>
              </h3>

              <p>
                Hello Everyone, I have 2years of Experience in Web Development
              </p>
              <div className="header-btn">
                <button className="">
                  <a href="#contact">Let's Connect</a>
                </button>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-image">
            <div className="header-image">
              <img src="./images/header-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
