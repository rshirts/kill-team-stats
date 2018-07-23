import React from 'react'
import './TeamStat.css'

const teamStat = (props) => {
  return (
    <div styleName="teamStat">
      <div styleName="statName">
        {props.statName}
      </div>
      <div styleName="statValue">
        {props.statValue}
      </div>
    </div>
  )
}

export default teamStat
