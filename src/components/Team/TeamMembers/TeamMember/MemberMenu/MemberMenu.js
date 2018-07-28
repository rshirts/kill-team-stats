import React from "react";
import PropTypes from "prop-types";
import "./MemberMenu.css";
import EditableText from '../../../../UI/EditableText/EditableText'

const componentName = props => {
  return (
    <div styleName="memberMenu">
      <EditableText content={props.memberName} />
      <div styleName="addRemove">
        <div>
          +
        </div>
        <div>
          X
        </div>
      </div>
    </div>
  );
};

componentName.propTypes = {
  memberName: PropTypes.string
};

export default componentName;
