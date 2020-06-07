import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
// actions
import { getWhiskey } from '../actions/productActions';
// selectors
import { selectWhiskey } from '../selectors/productSelectors';
// component
import Whiskey from './Whiskey';
// constants
import background from '../constants/regionColors';

import { FaCartPlus } from 'react-icons/fa';

const Container = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	margin: auto;
	margin-top: 20px;

	div {
		width: 100%;
		max-width: 650px;
	}
`;

const CartButton = styled('button')`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25%;
	max-width: 250px;
	height: 50px;
	background: ${({region}) => `linear-gradient(
		to right,
		${background[region].from},
		${background[region].to}
	)`};
	border: 0px;
	border-radius: 10px;
	margin: 50px auto;
	cursor: pointer;
	color: white;

	span {
		margin-right: 10px;
	}
`;

const addToCart = (whiskey) => alert(
	`You will be soon able to add this bottle of ${whiskey.title} in your cart. Stay tuned for the future releases !`
);

class WhiskeyContainer extends Component {
	componentDidMount = () => {
		const { getWhiskey, id } = this.props;
		getWhiskey(id);
	}

	render = () => {
		const { whiskey } = this.props;
		return (
			<Container>
				<Whiskey whiskey={whiskey} />
				{whiskey && (
					<CartButton
						onClick={() => addToCart(whiskey)}
						region={whiskey.region}
					>
						<span>Add to cart</span>
						<FaCartPlus />
					</CartButton>
				)}
			</Container>
		)
	}
};

WhiskeyContainer.propTypes = {
	id: PropTypes.string.isRequired,
  whiskey: PropTypes.any
};

const mapState = (state, { id }) => ({
	whiskey: selectWhiskey(state, id)
});

const mapDispatch = (dispatch) => ({
	getWhiskey: (id) => dispatch(getWhiskey(id))
});

export default connect(mapState, mapDispatch)(WhiskeyContainer);
