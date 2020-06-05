import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
// actions
import { getArticles, getWhiskeys } from '../actions/productActions';
// selectors
import { selectArticles, selectWhiskeys } from '../selectors/productSelectors';

const App = styled('div')`
	text-align: center;
`;

class Home extends Component {
	componentDidMount = () => {
		const { getArticles, getWhiskeys } = this.props;
		getArticles();
		getWhiskeys();
	}

	render = () => {
		return (
			<App>
				List of whiskeys
			</App>
		)
	}
};

Home.propTypes = {
	articles: PropTypes.array.isRequired,
	getArticles: PropTypes.func.isRequired,
	getWhiskeys: PropTypes.func.isRequired,
  whiskeys: PropTypes.array.isRequired
};

const mapState = (state) => ({
	articles: selectArticles(state),
	whiskeys: selectWhiskeys(state)
});

const mapDispatch = (dispatch) => ({
	getArticles: () => dispatch(getArticles()),
	getWhiskeys: () => dispatch(getWhiskeys())
});

export default connect(mapState, mapDispatch)(Home);
