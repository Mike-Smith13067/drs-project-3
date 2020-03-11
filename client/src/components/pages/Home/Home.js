import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
      <div>


        <div className="slider">
          <div className="slide current">
            <a href="https://flyclipart.com/automotive-mechanic-car-repair-retro-auto-repair-clip-art-517846" title="Automotive Mechanic Car Repair Retro - Auto Repair Clip Art"><img src="/images/drs-logo.png" width="95%" alt = "drs-logo"/></a>
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

      </div>)}
  }
export default Home;