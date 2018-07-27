import React, { Component } from "react";
import "./TeamBuilder.css";
import TeamName from "../../components/Team/TeamName/TeamName";
import TeamLogo from "../../components/Team/TeamLogo/TeamLogo";
import TeamStats from "../../components/Team/TeamStats/TeamStats";

export class TeamBuilder extends Component {
  state = {
    teamName: "Ragnars Raiders",
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

  teamNameChangedHandler = event => {
    let newName = { ...this.state.teamName };
    newName = event.target.value;
    this.setState({ teamName: newName });
  };

  teamStatChangedHandler = (event, teamStat) => {
    const teamStatsToChange = { ...this.state.teamStats };
    teamStatsToChange[teamStat] = event.target.value;
    this.setState({ teamStats: teamStatsToChange });
  };

  render() {
    return (
      <main styleName="team">
        <TeamName
          content={this.state.teamName}
          changed={this.teamNameChangedHandler}
        />
        <TeamLogo teamLogoName={this.teamHasLogo()} />
        <TeamStats
          teamStats={this.state.teamStats}
          changed={this.teamStatChangedHandler}
        />
        <div styleName="players">Players</div>
      </main>
    );
  }
}

export default TeamBuilder;
