import React, { Component } from "react";

interface IProps {
  name: string;
  styles: any;
}
class Icon extends Component<any, IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { name, styles } = this.props;

    return (
      <span>
        <i className={name} style={styles} />
      </span>
    );
  }
}

export default Icon;
