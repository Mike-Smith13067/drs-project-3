import React, { Component } from "react";

function Form(props) {
	
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

export default Form;