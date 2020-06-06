import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxItem from './CheckBoxItem';
import styled from 'styled-components';

const Regions = styled('div')`
	display: flex;
	justify-content: center;
	width: 90%;
	margin: auto;
`;

const regions = [
	{ label: 'All', value: ''},
	{ label: 'Islands', value: 'islands'},
	{ label: 'Islay', value: 'islay'},
	{ label: 'Highlands', value: 'highlands'},
	{ label: 'Lowlands', value: 'lowlands'},
	{ label: 'Speyside', value: 'speyside'},
	{ label: 'Campbeltown', value: 'campbeltown'}
];

const RegionList = ({ onClick, region }) => (
	<Regions>
		{regions.map((r) => (
			<CheckBoxItem
				key={r.value}
				onClick={onClick}
				region={r}
				selected={region}
			/>
		))}
	</Regions>
);

RegionList.propTypes = {
	region: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default RegionList;
