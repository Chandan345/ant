import React, { Component } from "react";
import Icon from "../common/Icon";
interface IProps {
  contentIcon: string;
  contentName: string;
  count: number;
  decrementButton: (name: string, count: number) => void;
  incrementButton: (name: string, count: number) => void;
}
class Rooms extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  public render() {
    const {
      contentIcon,
      contentName,
      count,
      decrementButton,
      incrementButton
    } = this.props;
    return (
      <div>
        <span className={"text"}>
          <Icon name={contentIcon + ` icon-content`} />
          <span className="content-text">{contentName}</span>
          <span className="count">
            <Icon
              name={`fas fa-minus-circle minus-icon`}
              onClick={decrementButton.bind(this, contentName, count)}
            />
            <span className="count-number">{count}</span>
            <Icon
              name={`fas fa-plus-circle plus-icon`}
              onClick={incrementButton.bind(this, contentName, count)}
            />
          </span>
        </span>
        {contentName !== "CHILDREN" && <hr />}
      </div>
    );
  }
}
export default Rooms;
