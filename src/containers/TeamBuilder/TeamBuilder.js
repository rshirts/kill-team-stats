import React, { Component } from 'react'
import './TeamBuilder.css'
import TeamName from '../../components/Team/TeamName/TeamName'
import TeamLogo from '../../components/Team/TeamLogo/TeamLogo'
import TeamStats from '../../components/Team/TeamStats/TeamStats'

export class TeamBuilder extends Component {
  state = {
    teamName: 'Ragnars Raiders',
    teamLogoName: 'ragnar-raider-logo.png',
    teamStats: {
      wins: 3,
      losses: 0,
      con: 18,
      str: 15,
      int: 20,
      health: 25
    }
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
          <TeamStats teamStats={this.state.teamStats} />
          <div styleName="players">Players</div>
      </main>
    )
  }
}

export default TeamBuilder
