import React, { Component } from "react";
import Icon from "../common/Icon";
import { IStateBookingRoom } from "../common/interface";
import "../css/BookingRoom.css";
import RoomAdultsChild from "./RoomAdultsChild";

class BookingRooms extends Component<any, IStateBookingRoom> {
  constructor(props: any) {
    super(props);
    this.state = {
      adult: 0,
      child: 0,
      room: 0,
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
    switch (name) {
      case "ROOMS":
        this.setState({ room: ++rooms });
        break;
      case "ADULTS":
        this.setState({ adult: ++adults });
        break;
      case "CHILDREN":
        this.setState({ child: ++children });

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
        this.setState({ room: --rooms });
        break;
      case "ADULTS":
        this.setState({ adult: --adults });
        break;
      case "CHILDREN":
        this.setState({ child: --children });
        break;
    }
  };
}
export default BookingRooms;
