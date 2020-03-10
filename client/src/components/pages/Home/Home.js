import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const auto = true; // Auto scroll
    const intervalTime = 11000;
    let slideInterval;

    const nextSlide = () => {
      // Get current class
      const current = document.querySelector('.current');
      // Remove current class
      current.classList.remove('current');
      // Check for next slide
      if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
      } else {
        // Add current to start
        slides[0].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    };

    const prevSlide = () => {
      // Get current class
      const current = document.querySelector('.current');
      // Remove current class
      current.classList.remove('current');
      // Check for prev slide
      if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
      } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    };

    // Button events
    next.addEventListener('click', e => {
      nextSlide();
      if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    });

    prev.addEventListener('click', e => {
      prevSlide();
      if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    });

    // Auto slide
    if (auto) {
      // Run next slide at interval time
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }
  render() {
    return (
      <div>


        <div className="slider">
          <div className="slide current">
            <a href="https://flyclipart.com/automotive-mechanic-car-repair-retro-auto-repair-clip-art-517846" title="Automotive Mechanic Car Repair Retro - Auto Repair Clip Art"><img src="/images/drs-logo.png" width="95%" /></a>
          </div>
          <div className="slide">
            <div className="content">
              <h2>About DRS Automotive</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2>Diagnostic Tests</h2>
              <p>Whether your vehicle is showing obvious signs of a problem or you noticed the âcheck engineâ light is on, a quick car diagnostic test by an expert technician can help pinpoint the problem.</p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2>Brake Service</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2>Oil & Fluid Change</h2>
              <p>By following the oil change and fluid replacement schedules that DRS recommends, you can avoid problems in the years ahead.</p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2>Tune Ups</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2>Tire Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev"><i className="fas fa-arrow-left"></i></button>
          <button id="next"><i className="fas fa-arrow-right"></i></button>
        </div>

      </div>




    )


  }




}
export default Home;