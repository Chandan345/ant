import React, { Component } from "react";

interface IProps {
  name: string;
  styles: any;
  onClick: () => void;
}
class Icon extends Component<any, IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { name, styles } = this.props;
    return (
      <span>
        <i
          className={name}
          style={styles}
          onClick={this.props.onClick || null}
        />
      </span>
    );
  }
}

export default Icon;
