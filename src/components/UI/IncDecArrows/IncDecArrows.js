import React from 'react';
import PropTypes from 'prop-types';
import './IncDecArrows.css';
import Tooltip from '../../UI/Tooltip/Tooltip';

const incDecArrows = () => {
	return (
		<div styleName="incDecArrows">
			<Tooltip message="Increase Value">
				<div styleName="arrow up" />
			</Tooltip>
			<Tooltip message="Decrease Value">
				<div styleName="arrow down" />
			</Tooltip>
		</div>
	);
};

incDecArrows.propTypes = {};

export default incDecArrows;
