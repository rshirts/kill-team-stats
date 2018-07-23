import React, { Component } from 'react'
import './TeamBuilder.css'
import TeamName from '../../components/Team/TeamName/TeamName'
import TeamLogo from '../../components/Team/TeamLogo/TeamLogo'

export class TeamBuilder extends Component {
  state = {
    teamName: 'Ragnars Raiders',
    teamLogoName: ''
  }

  teamHasLogo = () => {
    if(this.state.teamLogoName) {
      return this.state.teamLogoName
    }
    return 'addLogoLogo.png';
  }
  
  render() {
    return (
      <main styleName="team">
          <TeamName teamName={this.state.teamName} />
          <TeamLogo teamLogoName={this.teamHasLogo()} />
          <div styleName="teamStats">Team Stats W/L</div>
          <div styleName="players">Players</div>
      </main>
    )
  }
}

export default TeamBuilder
