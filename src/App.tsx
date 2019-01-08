import React, { Component } from "react";
import "./App.css";
import BookingRooms from "./Components/Main/BookingRooms";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <BookingRooms />
      </div>
    );
  }
}

export default App;
