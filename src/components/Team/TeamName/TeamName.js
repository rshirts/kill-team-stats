import React from "react";
import "./TeamName.css";
import EditableText from "../../UI/EditableText/EditableText";
import PropTypes from "prop-types";
import AreaName from "../../UI/AreaName/AreaName";

const teamName = props => {
  return (
    <div styleName="teamName">
      <AreaName name="Team Name" />
      <EditableText changed={props.changed} content={props.content} />
    </div>
  );
};

teamName.propTypes = {
  changed: PropTypes.func,
  content: PropTypes.string
};

export default teamName;
