import React, { useState } from 'react';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';

export default function Projects() {
  const [btn, setBtn] = useState('one');

  const handleClass = (e) => {
    if (e.target.innerText === '1st Section') {
      setBtn('one');
    }
    if (e.target.innerText === '2nd Section') {
      setBtn('two');
    }
    if (e.target.innerText === '3td Section') {
      setBtn('three');
    }
  };

  return (
    <div id="projects">
      <div className="container text-center">
        <h1>My Projects</h1>
        <p className="p">
          My name is Mohamed, I live in Cairo, this is the 12th proj in react
          Dev.
        </p>
        <div className="btn-control">
          <button
            className={btn === 'one' ? 'active' : ''}
            onClick={(e) => handleClass(e)}
          >
            1st Section
          </button>
          <button
            className={btn === 'two' ? 'active' : ''}
            onClick={(e) => handleClass(e)}
          >
            2nd Section
          </button>
          <button
            className={btn === 'three' ? 'active' : ''}
            onClick={(e) => handleClass(e)}
          >
            3td Section
          </button>
        </div>
        <div className="row mt-4">
          {btn === 'one' ? (
            <>
              <div className="col-md-4">
                <div className="item">
                  <div className="overlay">
                    <h3>Business Startup</h3>
                    <p>Desing & Development</p>
                  </div>
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="overlay">
                    <h3>Business Startup</h3>
                    <p>Desing & Development</p>
                  </div>
                  <img src={img2} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="overlay">
                    <h3>Business Startup</h3>
                    <p>Desing & Development</p>
                  </div>
                  <img src={img3} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="overlay">
                    <h3>Business Startup</h3>
                    <p>Desing & Development</p>
                  </div>
                  <img src={img4} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="overlay">
                    <h3>Business Startup</h3>
                    <p>Desing & Development</p>
                  </div>
                  <img src={img5} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="overlay">
                    <h3>Business Startup</h3>
                    <p>Desing & Development</p>
                  </div>
                  <img src={img6} alt="" />
                </div>
              </div>
            </>
          ) : btn === 'two' ? (
            ''
          ) : btn === 'three' ? (
            <p className="p">
              My name is Mohamed, I live in Cairo, this is the 12th proj in
              react Dev.
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
