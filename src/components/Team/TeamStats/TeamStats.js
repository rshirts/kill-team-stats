import React from "react";
import "./TeamStats.css";
import TeamStat from "./TeamStat/TeamStat";
import PropTypes from "prop-types";
import AreaName from '../../UI/AreaName/AreaName'

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

  return (
    <div styleName="teamStatsContainer">
      <AreaName name="Team Stats" />
      <div styleName="teamStatsItems">
      {transformedStats}
      </div>
    </div>
  )
};

teamStats.propTypes = {
  teamStats: PropTypes.object,
  changed: PropTypes.func
};

export default teamStats;
