import React from "react";
import "./TeamName.css";
import EditableText from "../../../UI/EditableText/EditableText";
import PropTypes from "prop-types";

const teamName = props => {
  return (
    <div styleName="teamName">
      <EditableText changed={props.changed} content={props.content} />
    </div>
  );
};

teamName.propTypes = {
  changed: PropTypes.func,
  content: PropTypes.string
};

export default teamName;
