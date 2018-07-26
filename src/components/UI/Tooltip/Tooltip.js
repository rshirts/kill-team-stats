import React from "react";
import "./Tooltip.css";

const tooltip = props => (
  <div styleName="tooltip">
    {props.children}
    <div styleName="message">{props.message}</div>
    <div styleName="arrow-down" />
  </div>
);

export default tooltip;
