import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Whiskey from './Whiskey';

const Item = styled('div')`
	width: 100%;
	display: inline-block;
`;

class WhiskeyListItem extends Component {
	render = () => {
		const { whiskey } = this.props;
		return (
			<>
				{whiskey && (
					<Item>
						<Whiskey whiskey={whiskey} />
					</Item>
				)}
			</>
		)
	}
};

WhiskeyListItem.propTypes = {
  whiskey: PropTypes.any.isRequired
};


export default WhiskeyListItem;
