import React from "react";
import { IoIosPin } from "react-icons/io";

export default function Entry(props) {
  console.log(props.entries);
  return (
    <div className="entry">
      <img src={props.entry.img} alt="" />
      <div className="text">
        <p className="country">
          <IoIosPin className="pin" />
          <span className="location">{props.entry.location} </span>
          <span className="maps">
            <a href={props.entry.googleMapsUrl}>View on Google Maps</a>
          </span>
        </p>
        <h1 className="title">{props.entry.title}</h1>
        <p className="date">
          {props.entry.startDate} - {props.entry.endDate}
        </p>
        <p className="description">{props.entry.description}</p>
      </div>
    </div>
  );
}
