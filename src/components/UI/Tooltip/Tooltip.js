import React from "react";
import "./Tooltip.css";
import PropTypes from "prop-types";

const tooltip = props => (
  <div styleName="tooltip">
    {props.children}
    <div styleName="message">{props.message}</div>
    <div styleName="arrow-down" />
  </div>
);

tooltip.propTypes = {
  message: PropTypes.string
};

export default tooltip;
