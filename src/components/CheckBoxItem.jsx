import React from 'react';
import styled from 'styled-components';

const Item = styled('div')`
	input {
		display: none;
	}

	.checkbox-tools:checked + label,
	.checkbox-tools:not(:checked) + label{
		position: relative;
		display: inline-block;
		padding: 20px;
		min-width: 100px;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 1px;
		margin: 0 auto;
		margin-left: 5px;
		margin-right: 5px;
		margin-bottom: 10px;
		text-align: center;
		border-radius: 50px;
		cursor: pointer;
		text-transform: capitalize;
		-webkit-transition: all 300ms linear;
		transition: all 300ms linear; 
	}
	.checkbox-tools:not(:checked) + label{
		background-color: white;
		color: #777777;
		border: 3px solid #d6d6d6;
	}
	.checkbox-tools:checked + label{
		background-color: #f3f3f3;
		color: black;
		border: 3px solid #777777
	}
`;

const CheckBoxItem = ({ onClick, region, selected }) => (
	<Item onClick={() => onClick(region.value)}>
		<input
			type="radio"
			id={region.value}
			name="region"
			value={region.value}
			checked={region.value === selected}
			className="checkbox-tools"
			readOnly
		/>
		<label htmlFor={region.value} className="for-checkbox-tools">{region.label}</label>
	</Item>
);

export default CheckBoxItem;
