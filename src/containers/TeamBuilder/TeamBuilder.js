import React, { Component } from 'react'
import './TeamBuilder.css'
import TeamName from '../../components/Team/TeamName/TeamName'

export class TeamBuilder extends Component {
  state = {
    teamName: 'Ragnars Raiders'
  }
  render() {
    return (
      <div>
        <div styleName="teamBanner">
          <TeamName teamName={this.state.teamName} />
          <div styleName="TeamLogo">TeamLogo</div>
          <div styleName="TeamStats">Team Stats W/L</div>
          <div styleName="Players">Players</div>
        </div>
      </div>
    )
  }
}

export default TeamBuilder
