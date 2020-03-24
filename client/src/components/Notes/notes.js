import React, { Component } from "react";
import Row from '../Row';
import axios from 'axios';

class Note extends Component {
  state = { note: ""}

  handleSubmit  = (event) => {
    event.preventDefault();
    axios.update("/note/update", {...this.state}) 

  }

render (){
  return (
    <container className="form-container">
      <form className="create-customer">
        <span className="formtext">&#x3C;Update Notes /&#x3E;</span>
        <Row>
          <input
            type="text"
            placeholder="Enter a note here"
            required
            name="note"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <button id= "notes" onClick = {this.handleSubmit}>Submit new note.</button>
        </Row>
      </form>
    </container>

  );
}
}

export default Note;