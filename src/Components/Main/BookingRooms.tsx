import React, { Component } from "react";
import Icon from "../common/Icon";
import "./BookingRoom.css";
import RoomAdultsChild from "./RoomAdultsChild";
interface IBook {
  name: string;
  iconName: string;
}
interface IState {
  totalContent: IBook[];
  room: number;
  adult: number;
  child: number;
}
class BookingRooms extends Component<any, IState> {
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

  public decrementButton = (
    name: string,
    room: number,
    adult: number,
    child: number
  ) => {
    const { totalContent } = this.state;
    switch (name) {
      case "ROOMS":
        this.decrementRoom(room, adult, child);
        break;
      case "ADULTS":
        this.decrementAdults(room, adult, child);
        break;
      case "CHILDREN":
        this.decrementChildren(room, adult, child);
        break;
    }
  };
  public incrementButton = (
    name: string,
    room: number,
    adult: number,
    child: number
  ) => {
    switch (name) {
      case "ROOMS":
        this.incrementRoom(room, adult, child);
        break;
      case "ADULTS":
        this.incrementAdults(room, adult, child);
        break;
      case "CHILDREN":
        this.incrementChildren(room, adult, child);
        break;
    }
  };
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
  // =========================================== DECREMENT ==========================================================//
  private decrementRoom = (rooms: number, adults: number, children: number) => {
    const { totalContent, room, adult, child } = this.state;
    this.setState({ room: --rooms });
  };
  private decrementAdults = (
    rooms: number,
    adults: number,
    children: number
  ) => {
    const { totalContent, room, child, adult } = this.state;
    this.setState({ adult: --adults });
  };
  private decrementChildren = (
    rooms: number,
    adults: number,
    children: number
  ) => {
    const { totalContent, room, child } = this.state;
    this.setState({ child: --children });
  };
  // =========================================== INCREMENT ==========================================================//

  private incrementRoom = (rooms: number, adults: number, children: number) => {
    this.setState({ room: ++rooms });
  };
  private incrementAdults = (
    rooms: number,
    adults: number,
    children: number
  ) => {
    this.setState({ adult: ++adults });
  };
  private incrementChildren = (
    rooms: number,
    adults: number,
    children: number
  ) => {
    this.setState({ child: ++children });
  };
}

export default BookingRooms;
