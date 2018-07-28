import React from 'react'
import PropTypes from 'prop-types'
import './EditableImage.css'

const editableImage = (props) => {
  return (
    <div styleName="editableImage">
      <img
        src={require(`../../../assets/images/${props.teamLogoName}`)}
        alt="Team Logo"
      />
    </div>
  )
}

editableImage.propTypes = {
  teamLogoName: PropTypes.string
}

editableImage.defaultProps = {
  teamLogoName: "addLogo.png"
};

export default editableImage
