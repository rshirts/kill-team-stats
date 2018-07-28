import React from "react";
import PropTypes from "prop-types";
import AreaName from "../../../../UI/AreaName/AreaName";
import "./MemberMenu.css";

const componentName = props => {
  return (
    <div styleName="memberMenu">
      <div styleName="memberName">{props.memberName}</div>
      <div> X </div>
    </div>
  );
};

componentName.propTypes = {};

export default componentName;
