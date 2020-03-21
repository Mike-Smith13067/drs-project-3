import React from "react";
import Calendar from "react-calendar";

class Card extends React.Component {
  render() {
    return(
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <>
       <div class="header">
         <h1>React Card Component</h1>
         <h3>A simple and responsive card component in React with clean hover effects. Copy and customise.</h3>
       </div>
      
       <div className='cards'>
         <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
      </div>  
      </>
    )
  }
}

export default Card; 
