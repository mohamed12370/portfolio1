import React from 'react';
import img1 from '../img/contact.png';

export default function Contact() {
  const handleSubnit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-5 contact-img">
            <img className="w-100" src={img1} alt="" />
          </div>
          <div className="col-md-7">
            <h3>Get In Touch</h3>
            <form onSubmit={(e) => handleSubnit(e)}>
              <div className="r1">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="r2">
                <input type="email" placeholder="Email Address" />
                <input type="number" placeholder="Phone Number" />
              </div>
              <div className="r3">
                <textarea placeholder="Message"></textarea>
              </div>
              <button className="">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
