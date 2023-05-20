import React from 'react';

export default function Skills() {
  // m01226571893m
  return (
    <div id="skills">
      <div className="container text-center">
        <h1>Skills</h1>
        <p className="p">You Can See My Skills Here</p>
        <div className="">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="skill-container">
                  <div className="skill-item">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>HTML</p>
                  </div>
                  <div className="skill-item">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>CSS</p>
                  </div>
                  <div className="skill-item d-none d-md-block">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>Bootstrap</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="skill-container">
                  <div className="skill-item">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>JavaScript</p>
                  </div>
                  <div className="skill-item d-none d-md-block">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>ES6</p>
                  </div>
                  <div className="skill-item">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>TypeScript</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="skill-container">
                  <div className="skill-item">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>Node.js</p>
                  </div>
                  <div className="skill-item">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>React.js</p>
                  </div>
                  <div className="skill-item d-none d-md-block">
                    <div className="item">
                      <progress value="95" min="0" max="100">
                        95%
                      </progress>
                    </div>
                    <p>Next.js</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
