import React from "react";
import PropTypes from "prop-types";

const areaName = props => {
  return <div styleName="areaName">{props.name}</div>;
};

areaName.propTypes = {
  name: PropTypes.string
};

export default areaName;
