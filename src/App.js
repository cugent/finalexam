import React, { Component } from "react";
import io from "socket.io-client";
import { Switch, Route } from "react-router";
import { BrowserRouter, Redirect } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.socket = io("http://localhost:1337");
  }

  componentDidMount = () => {
    this.socket.on("greeting", data => {
      //4
      console.log("CLIENT > socket.on greeting");
      console.log(data.msg); //5
      this.socket.emit("thankyou", { msg: "Thank you for connecting me! -Client" });
    });

    this.socket.on("usercountchanged", data => {
      //4
      console.log("usercountchanged");
      this.setState({ loggedInUsers: data.count });
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
