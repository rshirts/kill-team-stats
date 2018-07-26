import React from 'react'
import './TeamName.css'
import EditableText from '../../UI/EditableText/EditableText';

const teamName = (props) => {
  return (
      <div styleName="teamName">
        <EditableText changed={props.changed} content={props.content} />
      </div>
    )
}

export default teamName
