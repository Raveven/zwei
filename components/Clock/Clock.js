import { Component } from "react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import moment from "moment";

class Clock extends Component {
  constructor(props) {
    super(props);

    const time = moment().format("h:mm");
    const amPm = moment().format("A");

    this.timeFormat = props.timeFormat || "HH:mm";
    this.dateFormat = props.dateFormat || "MM/dd/yyyy";

    this.state = {
      time: this.timeString,
      date: this.dateString,
    };

    setInterval(() => this.updateTime(), 5000);

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    this.setState({
      time: this.timeString,
      date: this.dateString,
    });
  }

  get dateString() {
    return format(new Date(), this.dateFormat);
  }

  get timeString() {
    return format(new Date(), this.timeFormat);
  }

  render() {
    return (
      <div className="bg-gray-900 bg-opacity-50 hover:bg-opacity-75 rounded-xl px-4 w-100 py-8 mb-6 text-gray-50 text-center">
        <div className=" justify-center items-center ">
          <h1 className="text-6xl ">{this.state.time}</h1>
          <hr className="w-1/2 mx-36 border-b-2 border-gray-50" />
          <h2 className="text-3xl mt-3">{this.state.date}</h2>
        </div>
      </div>
    );
  }
}

export default Clock;
