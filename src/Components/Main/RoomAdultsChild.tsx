import React, { Component } from "react";
import Icon from "../common/Icon";
import { IPropsRoomsAdultsChild } from "../common/interface";
class RoomAdultsChild extends Component<IPropsRoomsAdultsChild> {
  public render() {
    const {
      contentIcon,
      contentName,
      roomCount,
      childCount,
      adultCount,
      decrementButton,
      incrementButton
    } = this.props;
    const count =
      (contentName === "CHILDREN" && childCount) ||
      (contentName === "ADULTS" && adultCount) ||
      (contentName === "ROOMS" && roomCount) ||
      0;
    return (
      <div>
        <span className={"text"}>
          <Icon name={contentIcon + ` icon-content`} />
          <span className="content-text">{contentName}</span>
          <span className="count">
            <Icon
              name={`fas fa-minus-circle minus-icon`}
              onClick={decrementButton.bind(
                this,
                contentName,
                roomCount,
                adultCount,
                childCount
              )}
            />
            <span className="count-number">{count}</span>
            <Icon
              name={`fas fa-plus-circle plus-icon`}
              onClick={incrementButton.bind(
                this,
                contentName,
                roomCount,
                adultCount,
                childCount
              )}
            />
          </span>
        </span>
        {contentName !== "CHILDREN" && <hr />}
      </div>
    );
  }
}
export default RoomAdultsChild;
