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

const Container = styled('div')`
	width: 80%;
	margin: auto;
	margin-top: 20px;
	
	div {
		background-attachment: fixed;
		background-repeat: no-repeat;
	}
`;

const CartButton = styled('div')`
	width: 25%;
	margin: 50px auto;
	background: ${({region}) => `linear-gradient(to right, ${background[region].from}, ${background[region].to})`};
	border-radius: 10px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: white;
`;

const addToCart = (whiskey) => {
	alert(`You will be soon able to add this bottle of ${whiskey.title} in your cart. Stay tuned for the future releases !`)
}

class WhiskeyContainer extends Component {
	componentDidMount = () => {
		const { getWhiskey, id } = this.props;
		getWhiskey(id);
	}

	render = () => {
		const { whiskey } = this.props;
		return (
			<Container>
				{whiskey && (
					<>
						<Whiskey whiskey={whiskey} />
						<CartButton onClick={() => addToCart(whiskey)} region={whiskey.region}>Add to cart</CartButton>
					</>
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
