import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [btn, setBtn] = useState('one');

  const handleClass = (e) => {
    if (e.target.innerText === 'Home') {
      setBtn('one');
    }
    if (e.target.innerText === 'Skills') {
      setBtn('two');
    }
    if (e.target.innerText === 'Projects') {
      setBtn('three');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
      <div className="container">
        <Link to="/" className="navbar-brand text-white">
          Portfolio
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={btn === 'one' ? 'nav-link active ' : 'nav-link '}
                aria-current="page"
                href="/#"
                onClick={(e) => handleClass(e)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={btn === 'two' ? 'nav-link active ' : 'nav-link '}
                href="#skills"
                onClick={(e) => handleClass(e)}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={btn === 'three' ? 'nav-link active ' : 'nav-link '}
                href="#projects"
                onClick={(e) => handleClass(e)}
              >
                Projects
              </a>
            </li>
          </ul>
          <div className="nav-icons">
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
            <span className="icon">
              <i className="fab fa-instagram "></i>
            </span>
          </div>
          <button className="nav-button">
            <a href="#contact">Let's Connect</a>
          </button>
        </div>
      </div>
    </nav>
  );
}
