import React from "react";
// import ImageUploader from 'react-images-upload';
import loginImg from "./Img/loginImg.svg";
import "./scss/app.scss";
//import $ from 'jquery';
import axios from "axios";
//import { render } from '@testing-library/react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 70,
      b: -20,
      rUD: "D",
      bUD: "D",
      deg: 150,
    };
  }
  updateColours() {
    if (this.state.b < -20 || this.state.bUD === "U") {
      this.setState({ bUD: "U" });
      var bChange = Math.floor(Math.random() * 2) * 0.1;
    }
    if (this.state.b > 100 || this.state.bUD === "D") {
      this.setState({ bUD: "D" });
      var bChange = -Math.floor(Math.random() * 2) * 0.1;
    }

    if (this.state.r < 0 || this.state.rUD === "U") {
      this.setState({ rUD: "U" });
      var rChange = Math.floor(Math.random() * 2) * 0.1;
    }
    if (this.state.r > 100 || this.state.rUD === "D") {
      this.setState({ rUD: "D" });
      var rChange = -Math.floor(Math.random() * 2) * 0.1;
    }
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var degChange = 0.01;

    if (Math.abs(this.state.b - this.state.r) < 50) {
      this.setState({ rUD: "U", bUD: "D" });
    }

    this.setState({
      r: this.state.r + rChange,
      b: this.state.b + bChange,
      deg: this.state.deg + degChange,
    });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.updateColours(), 10);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const loginScreen = {
      background:
        "linear-gradient(" +
        this.state.deg +
        "deg, rgb(15, 68, 167) " +
        this.state.b +
        "%, rgb(173,216,230) " +
        this.state.r +
        "%",
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-3 loginBar">
            <h1>ErgVision</h1>
            <form className="form-group">
              <label for="username-input">Username</label>
              <input
                type="email"
                class="form-control"
                id="username-input"
                aria-describedby="emailHelp"
                placeholder="Enter username"
              />
              <label for="club-input">Club</label>
              <select class="form-control" id="club-input">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </form>
          </div>

          <div className="col d-flex loginScreen" style={loginScreen}></div>
        </div>
      </div>
    );
  }
}

export default App;
