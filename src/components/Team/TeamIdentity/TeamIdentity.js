import React from 'react'
import PropTypes from 'prop-types'
import './TeamIdentity.css'
import TeamName from './TeamName/TeamName'
import TeamLogo from './TeamLogo/TeamLogo'
import AreaName from '../../UI/AreaName/AreaName'

const teamIdentity = (props) => {
  return (
    <div styleName="teamIdentity">
      <AreaName name="Team Info" />
      <TeamName changed={props.changed} content={props.content} />
      <div styleName="teamLogo">
        <TeamLogo teamLogoName={props.teamLogoName} />
      </div>

    </div>
  )
}

teamIdentity.propTypes = {

}

export default teamIdentity
