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
import RegionList from './RegionList';
import WhiskeyListItem from './WhiskeyListItem';

const Title = styled('h1')`
	color: black;
	text-transform: uppercase;
	margin-bottom: 50px;
	font-size: 56px;
`;

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
	constructor(props) {
		super(props);
		this.state = {
			region: ''
		}
	};

	componentDidMount = () => {
		const { getArticles, getWhiskeys } = this.props;
		getArticles();
		getWhiskeys({ region: null });
	};

	filter = (region) => {
		this.props.getWhiskeys({ region });
		this.setState({ region });
	};

	render = () => {
		const { whiskeys } = this.props;
		const { region } = this.state;
		return (
			<HomeContainer>
				<Title>Whiskey Selection</Title>
				<RegionList onClick={this.filter} region={region} />
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
	getWhiskeys: (filter) => dispatch(getWhiskeys(filter))
});

export default connect(mapState, mapDispatch)(Home);
