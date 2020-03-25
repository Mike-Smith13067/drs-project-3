import React, {Component} from "react";
import Card from "../../Card/Card";
import Row from "../../Row";
import './style.css'

const Image = require("./images/churchandsnook.jpg")
const missionStatement = {
    title: "Mission Statement",
    image: <img width="100%" height="220em" src="https://getfullyfunded.com/wp-content/uploads/2019/07/Mission-Statement.jpg"></img>,
    text: "To deliver quality automotive diagnostics and solutions while also providing outstanding customer service."
};
const bio = {
    title: "Biography",
    text: "Wayne is the owner and manager of DRS Automotive LLC. Originally from Texas, he has lived in Colorado since elementary school and worked on cars since he bought his first one as a teenager. Owning his own shop has always been a dream of his since he started working in the automotive industry 20+ years ago. Wayne is ASE certified and enjoys diagnosing tough problems. He is also passionate about providing outstanding customer service from start to finish. In his spare time he is restoring a 1947 Willys Jeep."
};
const casey = {
    title: "Meet Casey!",
    text: "Our Official Head of Security and Customer Greeter", 
    image: <img width="100%" height="260em" src={require("../../../assets/images/casey.png")} />,
};
const churchSnook = {
    title:"Church & Snook", 
    text: "Co-Managers of DRS and Pest Control Experts", 
    image: <img width="100%" height="260em"
        src={Image}></img>,
};

class About extends Component {
    componentDidMount() {}
    render() {
        return (
            <div className="container">
                <Row>
                    <div className="col-md-12">
                        <Card text={bio}/>
                    </div>
                    <div className="col-md-4">
                        <Card text={missionStatement}/>
                    </div>
                    <div className="col-md-4">
                        <Card text={casey}/>
                    </div>
                    <div className="col-md-4">
                        <Card text={churchSnook}/>
                    </div>
                </Row>
            </div>
        )

    }


}
export default About;
