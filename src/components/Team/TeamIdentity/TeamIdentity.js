import React from 'react';
import PropTypes from 'prop-types';
import './TeamIdentity.css';
import TeamName from './TeamName/TeamName';
import AreaName from '../../UI/AreaName/AreaName';
import EditableImage from '../../UI/EditableImage/EditableImage';

const teamIdentity = (props) => {
	return (
		<div styleName="teamIdentityContainer">
			<AreaName name="Team Info" />
			<div styleName="teamIdentityItems">
				<TeamName changed={props.changed} content={props.content} />
				<div styleName="teamLogo">
					<EditableImage teamLogoName={props.teamLogoName} />
				</div>
			</div>
		</div>
	);
};

teamIdentity.propTypes = {
  name: PropTypes.string,
  changed: PropTypes.func,
  content: PropTypes.string,
  teamLogoName: PropTypes.string
};

export default teamIdentity;
