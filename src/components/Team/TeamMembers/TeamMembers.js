import React from "react";
import PropTypes from "prop-types";
import "./TeamMembers.css";
import TeamMember from "./TeamMember/TeamMember";

const teamMembers = props => {
  let transformedTeamMembers = props.teamMembers.map((member, i) => {
    return <TeamMember key={member + i} member={member} />
  });

  return (
    <div styleName="teamMembers">
      {transformedTeamMembers}
    </div>
  );
};

teamMembers.propTypes = {
  teamMembers: PropTypes.array
};

export default teamMembers;
