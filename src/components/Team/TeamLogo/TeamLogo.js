import React from "react";
import "./TeamLogo.css";
import PropTypes from "prop-types";
import AreaName from '../../UI/AreaName/AreaName'

const teamLogo = props => {
  return (
    <div styleName="teamLogo">
      <AreaName name="Team Logo" />
      <img
        src={require(`../../../assets/images/${props.teamLogoName}`)}
        alt="Team Logo"
      />
    </div>
  );
};

teamLogo.propTypes = {
  teamLogoName: PropTypes.string
};

teamLogo.defaultProps = {
  teamLogoName: "addLogo.png"
};

export default teamLogo;
