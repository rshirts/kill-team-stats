import React from 'react'
import './TeamStat.css'
import EditableText from '../../../UI/EditableText/EditableText'

const teamStat = (props) => {
  return (
    <div styleName="teamStat">
      <div styleName="statName">
        {props.statKey}
      </div>
      <div styleName="statValue">
        <EditableText changed={props.changed} content={props.content} />
      </div>
    </div>
  )
}

export default teamStat
