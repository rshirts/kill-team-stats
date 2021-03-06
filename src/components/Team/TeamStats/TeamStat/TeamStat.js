import React from 'react';
import './TeamStat.css';
import EditableText from '../../../UI/EditableText/EditableText';
import PropTypes from 'prop-types';

const teamStat = (props) => {
	return (
		<div styleName="statContainer">
			<div styleName="teamStat">
				<div styleName="statName">{props.statKey}</div>
				<div styleName="statValue">
					<EditableText changed={props.changed} content={props.content} inputType='number' />
				</div>
			</div>
			{/* <IncDecArrows /> */}
		</div>
	);
};

teamStat.propTypes = {
	changed: PropTypes.func,
	statKey: PropTypes.string,
	content: PropTypes.number
};

export default teamStat;
