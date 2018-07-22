import React from 'react'
import './TeamName.css'

const teamName = (props) => {
  return (
    <div styleName="TeamName">
      {props.teamName}
    </div>
  )
}

export default teamName
