import React from "react";
import "./Tooltip.css";
import PropTypes from "prop-types";

const tooltip = props => {
  if(props.flip) {
    return (
      <div styleName="tooltipFlipped">
        {props.children}
        <div styleName="messageFlipped">{props.message}</div>
        <div styleName="arrow-down" />
      </div>
    )
  }
  return(
    <div styleName="tooltip">
      {props.children}
      <div styleName="message">{props.message}</div>
      <div styleName="arrow-down" />
    </div>
  )
}



tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  flip: PropTypes.bool
};

tooltip.defaultProps = {
  flip: false
}

export default tooltip;
