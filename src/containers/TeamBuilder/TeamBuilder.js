import React, { Component } from "react";
import "./TeamBuilder.css";
import TeamName from "../../components/Team/TeamName/TeamName";
import TeamLogo from "../../components/Team/TeamLogo/TeamLogo";
import TeamStats from "../../components/Team/TeamStats/TeamStats";

export class TeamBuilder extends Component {
  state = {
    teamName: {
      name: "Ragnars Raiders"
    },
    teamLogoName: "ragnar-raider-logo.png",
    // teamLogoName: "",
    teamStats: {
      wins: 3,
      losses: 0,
      con: 18,
      str: 15,
      int: 20,
      health: 25
    }
  };

  teamHasLogo = () => {
    if (this.state.teamLogoName) {
      return this.state.teamLogoName;
    }
    return "addLogo.png";
  };

  changedTeamNameHandler = event => {
    const teamNameToChange = { ...this.state.teamName };
    teamNameToChange.name = event.target.value;
    this.setState({ teamName: teamNameToChange });
  };

  changedTeamStatHandler = (event, teamStat) => {
    const teamStatsToChange = { ...this.state.teamStats };
    teamStatsToChange[teamStat] = event.target.value;
    this.setState({ teamStats: teamStatsToChange });
  };

  render() {
    return (
      <main styleName="team">
        <TeamName
          content={this.state.teamName.name}
          changed={this.changedTeamNameHandler}
        />
        <TeamLogo teamLogoName={this.teamHasLogo()} />
        <TeamStats
          teamStats={this.state.teamStats}
          changed={this.changedTeamStatHandler}
        />
        <div styleName="players">Players</div>
      </main>
    );
  }
}

export default TeamBuilder;
