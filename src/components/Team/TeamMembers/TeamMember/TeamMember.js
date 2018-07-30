import React from "react";
import PropTypes from "prop-types";
import "./TeamMember.css";
import AreaToolbar from "../../../UI/AreaToolbar/AreaToolbar";
import MemberStats from "./MemberStats/MemberStats";

const teamMember = props => {
  let formatedMemberStats = Object.keys(props.member).map((memberKey, i) => {
    if (memberKey === "memberName" || memberKey === "pictureName") {
      return null;
    }
    return (
      <MemberStats
        key={memberKey + i}
        memberKey={memberKey}
        content={props.member[memberKey]}
      />
    );
  });

  return (
    <div styleName="teamMember">
      <AreaToolbar memberName={props.member.memberName} />
      <div styleName="memberContents">
        <img
          alt="Member"
          src={`https://robohash.org/${
            props.member.memberName
          }.png ?size=100x100`}
        />
        {formatedMemberStats}
      </div>
    </div>
  );
};

teamMember.propTypes = {
  member: PropTypes.object
};

export default teamMember;
