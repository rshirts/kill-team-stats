import React from "react";
import "./TeamStats.css";
import TeamStat from "./TeamStat/TeamStat";
import PropTypes from "prop-types";

const teamStats = props => {
  let transformedStats = Object.keys(props.teamStats).map((statKey, i) => {
    return (
      <TeamStat
        key={statKey + i}
        statKey={statKey}
        content={props.teamStats[statKey]}
        changed={event => props.changed(event, statKey)}
      />
    );
  });

  return <div styleName="teamStats">{transformedStats}</div>;
};

teamStats.propTypes = {
  teamStats: PropTypes.object,
  changed: PropTypes.func
};

export default teamStats;
