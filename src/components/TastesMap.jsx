import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import background from '../constants/regionColors';

const angle = '10deg';
const panelAngle = '-10deg';

const TastePanel = styled('div')`
	height: 60px;
	width: 100%;
	margin: 0 0 36px -60px;
	background: ${({ region }) => `linear-gradient(to right, ${background[region].from}, ${background[region].to})`};
	display: flex;
	align-items: center;
	border-radius: 5px;
	-webkit-transform:skew(${panelAngle});
	-moz-transform:skew(${panelAngle});
	-o-transform:skew(${panelAngle});
	tranform:skew(${panelAngle});
`;

const TasteElements = styled('span')`
	display: flex;
	justify-content: space-around;
	width: 100%;
	
	span {
		fond-size: 14px;
		font-weight: regular;
		text-transform: capitalize;
		-webkit-transform:skew(${angle});
		-moz-transform:skew(${angle});
		-o-transform:skew(${angle});
		tranform:skew(${angle});
	}
`;

class TasteMap extends Component {
	render = () => {
		const { region, tastes } = this.props;
		return (
			<TastePanel region={region}>
				<TasteElements>
					{tastes.map((taste) => (<span key={taste}>{taste}</span>))}
				</TasteElements>
			</TastePanel>
		)
	}
};

TasteMap.propTypes = {
	region: PropTypes.string.isRequired,
  tastes: PropTypes.array.isRequired
};

export default TasteMap;
