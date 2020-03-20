import React, { Component } from "react";
import Card from "../../Card/Card";
import Row from "../../Row";

const Image = require("./images/churchandsnook.jpg")
const missionStatement = {
  title: "Mission Statement",
  image: '',
  text: "To deliver quality automotive diagnostics and solutions while also providing outstanding customer service."};
const bio = {
  title: "Biography",
  text: "Wayne is the owner and manager of DRS Automotive LLC. Originally from Texas, he has lived in Colorado since elementary school and worked on cars since he bought his first one as a teenager. Owning his own shop has always been a dream of his since he started working in the automotive industry 20+ years ago. Wayne is ASE certified and enjoys diagnosing tough problems. He is also passionate about providing outstanding customer service from start to finish. In his spare time he is restoring a 1947 Willys Jeep."
};
const casey = {
  title: "Head of security and Customer Welcome",
  image: "",
  text: ""
};
const churchAndSnook = {
  title: "Co-supervisors and Pest Control",
  image: <img src={Image}></img>,

  text: ""
};

class About extends Component {
  componentDidMount() { }
  render() {
    return (
      <div className="container">
        <Row>
          <div className="col-sm">
            <Card text={missionStatement}/>
          </div>
          <div className="col-sm">
            <Card text={bio}/>
          </div>
          </Row>
          <Row>
          <div className="col-sm">
            <Card text={casey}/>
          </div>
          <div className="col-sm">
            <Card text={churchAndSnook} />
          </div>
          <div className="col-sm">
          </div>
          </Row>
      </div >
    )

  }


}
export default About;