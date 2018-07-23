import React from 'react'
import './TeamLogo.css'

const teamLogo = (props) => {
  return (
    <div styleName="teamLogo">
      <img src={require(`../../../assets/images/${props.teamLogoName}`)} alt='Team Logo' />
    </div>
  )
}

export default teamLogo
