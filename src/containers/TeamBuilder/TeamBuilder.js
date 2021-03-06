import React, { Component } from 'react';
import './TeamBuilder.css';
import TeamIdentity from '../../components/Team/TeamIdentity/TeamIdentity';
import TeamStats from '../../components/Team/TeamStats/TeamStats';
import TeamMembers from '../../components/Team/TeamMembers/TeamMembers';

export class TeamBuilder extends Component {
	state = {
		teamName: 'Ragnars Raiders',
		teamLogoName: 'ragnar-raider-logo.png',
		// teamLogoName: "",
		teamStats: {
			wins: 3,
			losses: 0,
			Intellignece: 18,
			Material: 15,
			Moral: 20,
			Territory: 25
		},
		teamMembers: [
			{
				memberName: 'first',
				pictureName: 'first',
				type: 'IG',
				role: 'infintry',
				specialty: 'sniper',
				kills: 1,
				deaths: 2
			},
			{
				memberName: 'second',
				pictureName: 'first',
				type: 'IG',
				role: 'infintry',
				specialty: 'sniper',
				kills: 1,
				deaths: 2
			},
			{
				memberName: 'third',
				pictureName: 'first',
				type: 'IG',
				role: 'infintry',
				specialty: 'sniper',
				kills: 1,
				deaths: 2
			},
			{
				memberName: 'fourth',
				pictureName: 'first',
				type: 'IG',
				role: 'infintry',
				specialty: 'sniper',
				kills: 1,
				deaths: 2
			}
		]
	};

	teamHasLogo = () => {
		if (this.state.teamLogoName) {
			return this.state.teamLogoName;
		}
		return 'addLogo.png';
	};

	teamNameChangedHandler = (event) => {
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
				<TeamIdentity
					content={this.state.teamName}
					changed={this.teamNameChangedHandler}
					teamLogoName={this.teamHasLogo()}
				/>
				<TeamStats teamStats={this.state.teamStats} changed={this.teamStatChangedHandler} />
				<TeamMembers teamMembers={this.state.teamMembers} />
			</main>
		);
	}
}

export default TeamBuilder;
