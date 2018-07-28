import React from 'react'
import PropTypes from 'prop-types'
import './TeamIdentity.css'
import TeamName from './TeamName/TeamName'
import AreaName from '../../UI/AreaName/AreaName'
import EditableImage from '../../UI/EditableImage/EditableImage'

const teamIdentity = (props) => {
  return (
    <div styleName="teamIdentity">
      <AreaName name="Team Info" />
      <TeamName changed={props.changed} content={props.content} />
      <div styleName="teamLogo">
        <EditableImage teamLogoName={props.teamLogoName} />
      </div>

    </div>
  )
}

teamIdentity.propTypes = {

}

export default teamIdentity
