import { Component } from "react";

class ImgClass extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        style={{ width: "200px", height: "300px", objectFit: "cover", marginTop: "1rem" }}
      />
    );
  }
}

export default ImgClass;
