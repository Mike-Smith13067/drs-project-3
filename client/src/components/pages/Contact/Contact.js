import React from "react";
import Calendar from "react-calendar";

class Calendarpage extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  }

  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Calendarpage;