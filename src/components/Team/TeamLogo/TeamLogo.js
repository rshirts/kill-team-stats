import React from "react";
import "./TeamLogo.css";
import PropTypes from "prop-types";

const teamLogo = props => {
  return (
    <div styleName="teamLogo">
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
