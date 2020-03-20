import React, { Component } from "react";

class Form extends React.Component {
	render() {
  	return (
    	<form>
      <span className="formtext">&#x3C;Form /&#x3E;</span>
    	  <input 
          type="text" 
          placeholder="Enter Company Name" 
          required 
        />
        <button>Go!</button>
    	</form>
    );
  }
}

module.exports = Form;