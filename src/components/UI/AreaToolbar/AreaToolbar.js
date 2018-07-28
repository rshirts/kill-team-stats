import React from "react";
import PropTypes from "prop-types";
import "./AreaToolbar.css";
import EditableText from '../EditableText/EditableText'
import AreaOptions from './AreaOptions/AreaOptions'

const areaToolbar = props => {
  return (
    <div styleName="areaToolbar">
      <EditableText content={props.memberName} />
      <AreaOptions />
    </div>
  );
};

areaToolbar.propTypes = {
  memberName: PropTypes.string
};

export default areaToolbar;
