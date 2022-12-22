import React, { Component } from "react";

class Email extends Component {
  render() {
    const { mail } = this.props;
    return (
      <p>
        <a href={`mailto:${mail}`}>{mail}</a>
      </p>
    );
  }
}
export default Email;
