import React from "react";

export default function Hello(props) {
  if (props.name) {
    return <h1>Witaj, {props.name}!</h1>;
  } else {
    return <span>Cześć, nieznajomy</span>;
  }
}
