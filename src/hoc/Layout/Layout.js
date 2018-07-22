import React, { Component } from 'react'
import './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import TeamBuilder from '../../containers/TeamBuilder/TeamBuilder'

export default class Layout extends Component {
  render() {
    return (
        <div styleName="Layout">
          {/* The div surrounding the toolbar is there to provide proper spacing for the css grid of the layout, even though the toolbar has a fixed position */}
          <div>
            <Toolbar />
          </div>
          {/* <main styleName="Content"> */}
          <main>
            <TeamBuilder />
          </main>
          <div styleName="Footer">
              footer
          </div>
        </div>
    )
  }
}
