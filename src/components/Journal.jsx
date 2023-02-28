import React from "react";
import Entry from "./Entry";
import data from "../data";

export default function Journal() {
  const entries = data.map((entry) => {
    return <Entry key={entry.key} entry={entry} />;
  });

  return <main>{entries}</main>;
}
