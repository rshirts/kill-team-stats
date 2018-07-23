import React, { Component } from 'react'
import './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import TeamBuilder from '../../containers/TeamBuilder/TeamBuilder'

export default class Layout extends Component {
  render() {
    return (
        <div styleName="mainContainer">
        <div styleName="layout">
            <Toolbar />
            <TeamBuilder />
          <div styleName="footer">
              footer
          </div>
        </div>
        </div>
    )
  }
}
