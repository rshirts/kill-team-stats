import React from "react";
import PropTypes from "prop-types";
import "./MemberStats.css";
import EditableText from "../../../../UI/EditableText/EditableText";
const memberStats = props => {
  return (
    <div styleName="memberStats">
      <div styleName="memberStatName">{props.memberKey}</div>
      <div styleName="memberStatValue">
        <EditableText content={props.content} />
      </div>
    </div>
  );
};

memberStats.propTypes = {
  memberKey: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default memberStats;
