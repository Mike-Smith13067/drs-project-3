import React, { Component } from "react";
// import test from ./images"
const image0 = require("../Home/images/image0.jpg")
const image1 = require("../Home/images/image1.jpg")
const image2 = require("../Home/images/image2.jpg")
const image3 = require("../Home/images/image3.jpg")
const image4 = require("../Home/images/image4.jpg")
const image5 = require("../Home/images/image5.jpg")
const image6 = require("../Home/images/image6.jpg")
const image7 = require("../Home/images/image7.jpg")


class Home extends Component {
  componentDidMount() {
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const auto = true; // Auto scroll
    const intervalTime = 4000;
    let counter = 1;
    let slideInterval;
    

    const nextSlide = () => {
      counter++
      if(counter >= 8) {
        counter =0

      }

      var imageArray = [ image0, image1, image2, image3, image4, image5, image6, image7]; 
      var image = imageArray[counter];
      var currentImage = document.getElementById("current-image");
      currentImage.setAttribute("src", image);



      return image;
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
          <a href="https://flyclipart.com/automotive-mechanic-car-repair-retro-auto-repair-clip-art-517846" title="Automotive Mechanic Car Repair Retro - Auto Repair Clip Art"><img src={require("../Home/images/image0.jpg")} width="95%" alt="drs-logo" id = "current-image"/></a>
          </div>
          <div className="slide">
            <div className="content">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2></h2>
              <p></p>
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
              <p>The brake inspection typically involves checking the brake components according to manufacturer's guidelines. For example, measuring the brake pad or brake shoe material thickness and inspecting brake discs. If there are signs that pads or caliper guide (slide) pins are not moving freely, DRS Automotive may recommend servicing your brakes.
              <br></br>
              The disc brake service includes removing the pads and calipers, cleaning and lubricating guide pins and the caliper brackets to prevent sticking or seizing. The brake discs (rotors) might also need to be cleaned out from the surface rust, especially on the edges, to prevent squeaking. </p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2>Oil &amp; Fluid Change</h2>
              <p>Checking fluid levels regularly and changing the fluids and filters periodically can minimize the risks of breakdowns and prolong the life of the engine, transmission, cooling system and brakes. So, if you are driving a "maintenance challenged" vehicle, isn't it about time to start paying closer attention to the fluids and filters? </p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2>Tune Ups</h2>
              <p>Regular engine tune-ups restore power and efficiency back to your car. At DRS Auto Services we'll visually inspect your engine components. Install new parts (including spark plugs, fuel and air filters) as necessary, adjust timing and idle settings if applicable, and provide fuel system cleaning services to restore fuel system performance.  By following your vehicle manufacturer's recommendations, you're investing in your vehicle's longevity. Saving you time and money in the long run.  Contact us today to find out additional information. </p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h2>Tire Services</h2>
              <p>Properly maintained tires will give you a safer, more comfortable ride and a longer tread life. Tire component properties evolve over time. For each tire, this evolution depends upon many factors such as weather, storage conditions, and conditions of use (load, speed, inflation pressure, maintenance etc.) to which the tire is subjected throughout its life.
                <br></br>
              In addition to regular inspections and inflation pressure maintenance by consumers, it is recommended to have passenger car tires and light truck tires, including spare tires, inspected regularly by a qualified tire specialist, such as a tire dealer, who will assess the tire's suitability for continued service.  </p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev"><i className="fas fa-arrow-left"></i></button>
          <button id="next"><i className="fas fa-arrow-right"></i></button>
        </div>

      </div>)
  }
}
export default Home;