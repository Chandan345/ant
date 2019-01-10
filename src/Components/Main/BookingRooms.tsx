import React, { Component } from "react";
import Icon from "../common/Icon";
import { IStateBookingRoom } from "../common/interface";
import "../css/BookingRoom.css";
import RoomAdultsChild from "./RoomAdultsChild";

class BookingRooms extends Component<any, IStateBookingRoom> {
  constructor(props: any) {
    super(props);
    this.state = {
      adult: 1,
      child: 0,
      room: 1,
      totalContent: []
    };
  }
  public componentWillMount() {
    const totalContent = [
      { name: "ROOMS", iconName: "fas fa-bed" },
      { name: "ADULTS", iconName: "fas fa-users" },
      { name: "CHILDREN", iconName: "fas fa-child" }
    ];
    this.setState({ totalContent });
  }

  public render() {
    const { totalContent, room, adult, child } = this.state;

    const renderContent = totalContent.map((item, index) => (
      <span key={index}>
        <RoomAdultsChild
          contentIcon={item.iconName}
          contentName={item.name}
          roomCount={room}
          childCount={child}
          adultCount={adult}
          decrementButton={this.decrementButton.bind(
            this,
            item.name,
            room,
            adult,
            child
          )}
          incrementButton={this.incrementButton.bind(
            this,
            item.name,
            room,
            adult,
            child
          )}
        />
      </span>
    ));
    return (
      <div className="container">
        <div className="Main">
          <span className="header">
            <Icon name={`fas fa-users icon-head`} />
            <span className="header-text">
              {` Choose number of`}
              <span className="people-text">{` people`}</span>
            </span>
          </span>
          <div className="booking-content">{renderContent}</div>
        </div>
      </div>
    );
  }
  // =========================================== INCREMENT ================================================= //
  private incrementButton = (
    name: string,
    rooms: number,
    adults: number,
    children: number
  ) => {
    const {adult,room,child} = this.state;
    switch (name) {
      case "ROOMS":
      if(room < 5){
        this.setState({ room: rooms+1, adult: adults > rooms ? adults: rooms + 1});
      }
        break;
      case "ADULTS":
      if(adult < 20){
        this.setState({ adult: adults+1 });
      }
        break;
      case "CHILDREN":
        this.setState({ child: children+1 });

        break;
    }
  };
  // =========================================== DECREMENT ================================================= //

  private decrementButton = (
    name: string,
    rooms: number,
    adults: number,
    children: number
  ) => {
    switch (name) {
      case "ROOMS":
      if(rooms>1)
      {
        this.setState({ room: rooms-1,adult:(rooms-1)*4>adults?adults:(rooms-1)*4 });
      }
        break;
      case "ADULTS":
      if(adults>1)
      {
        this.setState({ adult: adults-1 });
      }
        break;
      case "CHILDREN":
      if(children>0)
      {
        this.setState({ child: children-1 });
      }
        break;
    }
  };
}
export default BookingRooms;
