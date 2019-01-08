import React, { Component } from "react";

interface IProps {
  name: string;
  size: number;
}
class Icon extends Component<any, IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { name, size } = this.props;

    return (
      <span>
        <i className={name} style={{ fontSize: size || 20 }} />
      </span>
    );
  }
}

export default Icon;
