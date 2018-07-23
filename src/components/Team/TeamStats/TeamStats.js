import React from 'react'
import './TeamStats.css'
import TeamStat from './TeamStat/TeamStat'

const teamStats = (props) => {
  let transformedStats = Object.keys(props.teamStats).map((statKey, i) => {
    return <TeamStat key={statKey + i} statName={statKey} statValue={props.teamStats[statKey]} />   
  })
  return (
    <div styleName="teamStats">
      {transformedStats}    
    </div>
  )
}

export default teamStats
