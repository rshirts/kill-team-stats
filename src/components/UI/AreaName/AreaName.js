import React from 'react';
import PropTypes from 'prop-types';
import './AreaName.css';

const areaName = (props) => {
	return (
		<div styleName="areaNameContainer">
			<div styleName="areaName">{props.name}</div>
		</div>
	);
};

areaName.propTypes = {
	name: PropTypes.string
};

export default areaName;
