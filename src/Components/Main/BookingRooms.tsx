import React, { Component } from 'react';
import Icon from '../common/Icon';



class BookingRooms extends Component {
    public render() {
      return (
        <div className="Main">
        <div className="container">
        <span><Icon name="fas fa-users" size={20}/>Choose number of people</span>
        </div>
          
        </div>
      );
    }
  }


  export default BookingRooms;