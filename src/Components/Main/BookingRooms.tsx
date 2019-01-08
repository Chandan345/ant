import React, { Component } from "react";
import Icon from "../common/Icon";
import "./BookingRoom.css";
import Rooms from "./Rooms";
interface IBook {
  name: string;
  iconName: string;
  count: number;
}
interface IState {
  totalContent: IBook[];
}
class BookingRooms extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      totalContent: []
    };
  }
  public componentWillMount() {
    const totalContent = [
      { name: "ROOMS", iconName: "fas fa-bed", count: 2 },
      { name: "ADULTS", iconName: "fas fa-users", count: 2 },
      { name: "CHILDREN", iconName: "fas fa-child", count: 2 }
    ];
    this.setState({ totalContent });
  }
  public render() {
    const { totalContent } = this.state;

    const renderContent = totalContent.map((item, index) => (
      <span key={index}>
        <Rooms
          contentIcon={item.iconName}
          contentName={item.name}
          count={item.count}
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
}

export default BookingRooms;
