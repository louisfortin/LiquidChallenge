import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
// actions
import { getArticles, getWhiskeys } from '../actions/productActions';
// selectors
import { selectArticles, selectWhiskeys } from '../selectors/productSelectors';
// components
import WhiskeyListItem from './WhiskeyListItem';

const HomeContainer = styled('div')`
	text-align: center;
`;

const NavItem = styled(NavLink)`
	min-width: 500px;
	width: 30%;
`;

const WhiskeyList = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

class Home extends Component {
	componentDidMount = () => {
		const { getArticles, getWhiskeys } = this.props;
		getArticles();
		getWhiskeys();
	}

	render = () => {
		const { whiskeys } = this.props;
		return (
			<HomeContainer>
				<p>Whiskey Selection</p>
				<WhiskeyList>
					{whiskeys.map((whiskey) => (
						<NavItem key={whiskey.title} to={`/whiskey${whiskey.uri}`}>
							<WhiskeyListItem whiskey={whiskey} />
						</NavItem>
					))}
				</WhiskeyList>
			</HomeContainer>
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
