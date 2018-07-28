import React from "react";
import PropTypes from "prop-types";
import "./TeamMember.css";
import MemberMenu from "./MemberMenu/MemberMenu";

const teamMember = props => {
  return (
    <div styleName="teamMember">
      <MemberMenu memberName={props.member.memberName} />
      <div styleName="memberContents">
        <img
          src={`https://robohash.org/${
            props.member.memberName
          }.png ?size=100x100`}
        />
      </div>
    </div>
  );
};

teamMember.propTypes = {
  member: PropTypes.object
};

export default teamMember;
