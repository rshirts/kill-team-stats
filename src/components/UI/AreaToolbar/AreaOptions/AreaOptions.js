import React from "react";
import PropTypes from "prop-types";
import "./AreaOptions.css";
import Tooltip from '../../Tooltip/Tooltip'

const areaOptions = () => {
  return (
    <div styleName="areaOptions">
      <Tooltip flip={true} message="Add Teammate"><div>+</div></Tooltip>
      <Tooltip flip={true} message="Remove Teammate"><div>X</div></Tooltip>
    </div>
  );
};

areaOptions.propTypes = {};

export default areaOptions;
