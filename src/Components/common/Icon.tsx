import React, { Component } from "react";
import { IPropsIcons } from "./interface";

class Icon extends Component<any, IPropsIcons> {
  public render() {
    const { name, styles } = this.props;
    return (
      <span>
        <i className={name} onClick={this.props.onClick || null} />
      </span>
    );
  }
}

export default Icon;
