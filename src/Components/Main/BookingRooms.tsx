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

  public decrementButton = (name: string, counts: number) => {
    const { totalContent } = this.state;
    const temp = totalContent.filter((item: any, index) => item.name === name);
    const count = temp[0].count;
    switch (name) {
      case "ROOMS":
        this.decrementRoom(count);
        break;
      case "ADULTS":
        this.decrementAdults(count);
        break;
      case "CHILDREN":
        this.decrementChildren(count);
        break;
    }
  };
  public incrementButton = (name: string, count: number) => {
    switch (name) {
      case "ROOMS":
        this.incrementRoom(count);
        break;
      case "ADULTS":
        this.incrementAdults(count);
        break;
      case "CHILDREN":
        this.incrementChildren(count);
        break;
    }
  };
  public render() {
    const { totalContent } = this.state;

    const renderContent = totalContent.map((item, index) => (
      <span key={index}>
        <Rooms
          contentIcon={item.iconName}
          contentName={item.name}
          count={item.count}
          decrementButton={this.decrementButton.bind(
            this,
            item.name,
            item.count
          )}
          incrementButton={this.incrementButton.bind(
            this,
            item.name,
            item.count
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

  private decrementRoom = (count: number) => {
    const { totalContent } = this.state;
    // this.setState(totalContent: totalContent[0].count)
    alert("- room");
  };
  private decrementAdults = (count: number) => {
    alert("-Adults");
  };
  private decrementChildren = (count: number) => {
    alert("-Child");
  };

  private incrementRoom = (count: number) => {
    alert("+ room");
  };
  private incrementAdults = (count: number) => {
    alert("+ Adults");
  };
  private incrementChildren = (count: number) => {
    alert("+ Child");
  };
}

export default BookingRooms;
