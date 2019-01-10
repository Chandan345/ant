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
    const decrementMethod = decrementButton.bind(
      this,
      contentName,
      roomCount,
      adultCount,
      childCount
    );
    const incrementMethod = incrementButton.bind(
      this,
      contentName,
      roomCount,
      adultCount,
      childCount
    );
    const disableMinusButton =
      (contentName === "ROOMS" && (roomCount === 1 && "disabled")) ||
      (contentName === "CHILDREN" && (childCount === 0 && "disabled")) ||
      (contentName === "ADULTS" && (adultCount === roomCount && "disabled")) ||
      null;
    const disablePlusButton =
      (contentName === "ROOMS" && (roomCount === 5 && "disabled")) ||
      (contentName === "CHILDREN" &&
        (roomCount * 4 === adultCount + childCount && "disabled")) ||
      (contentName === "ADULTS" &&
        (roomCount * 4 === adultCount && "disabled")) ||
      null;
    return (
      <div>
        <span className={"text"}>
          <Icon name={contentIcon + ` icon-content`} />
          <span className="content-text">{contentName}</span>
          <span className="count">
            <Icon
              name={`fas fa-minus-circle minus-icon ${disableMinusButton}
              `}
              onClick={decrementMethod}
            />
            <span className="count-number">{count}</span>
            <Icon
              name={`fas fa-plus-circle plus-icon ${disablePlusButton}`}
              onClick={incrementMethod}
            />
          </span>
        </span>
        {contentName !== "CHILDREN" && <hr />}
      </div>
    );
  }
}
export default RoomAdultsChild;
