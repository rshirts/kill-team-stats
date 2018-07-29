import React from 'react';
import PropTypes from 'prop-types';
import './IncDecArrows.css';

const incDecArrows = () => {
	return (
		<div styleName="incDecArrows">
			<div styleName="arrow up" />
			<div styleName="arrow down" />
		</div>
	);
};

incDecArrows.propTypes = {};

export default incDecArrows;
