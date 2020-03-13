import React, { Component } from "react";
import Card from "../../Card/Card";

const missionStatement = "To deliver quality automotive diagnostics and solutions while also providing outstanding customer service."
const bio = "Wayne is the owner and manager of DRS Automotive LLC. Originally from Texas, he has lived in Colorado since elementary school and worked on cars since he bought his first one as a teenager. Owning his own shop has always been a dream of his since he started working in the automotive industry 20+ years ago. Wayne is ASE certified and enjoys diagnosing tough problems. He is also passionate about providing outstanding customer service from start to finish. In his spare time he is restoring a 1947 Willys Jeep."
const casey = "Head of security"
const church = "Co-supervisor and Pest Control"
const snook = "Co-supervisor and Pest Control"

class About extends Component {
  componentDidMount() {}
    render() {
      return (
        <div className="container">
          <Card text={missionStatement} />
          <Card text ={bio} />
          <Card text ={casey} />
          <Card text ={church} />
          <Card text ={snook} />
        </div>
      ) 
      
    }
   
  
  }
  export default About;