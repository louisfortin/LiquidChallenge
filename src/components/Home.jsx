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
import Whiskey from './Whiskey';

const HomeContainer = styled('div')`
	text-align: center;
	width: 90%;
	margin: auto;

	h1 {
		color: black;
		text-transform: uppercase;
		margin-bottom: 50px;
		font-size: 56px;
	}
`;

const WhiskeyList = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const NavItem = styled(NavLink)`
	min-width: 400px;
	max-width: 450px;
	margin: 30px;
	display: inline-block;
	text-decoration:none;
`;

const Articles = styled('div')`
	margin: 50px 30px;
`;

const Article = styled('a')`
	position: relative;
	display:inline-block;

	img {
		width: 100%;
		filter: brightness(50%);
	}
`;

const ArticleContent = styled('div')`
	width: 50%
	height: 90%;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 100px;
	color: white;
	display: flex;
	flex-direction: column;
	text-align: left;
	justify-content: flex-end;
	overflow:auto; 

	h2 {
		text-transform: uppercase;
		font-size: 36px;
		font-weight: bold;
		margin: 0;
	}
	p {
		font-size: 18px;
		font-weight: regular;
		margin: 0;
	}
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
		getWhiskeys({ region: '' });
	};

	filter = (region) => {
		this.props.getWhiskeys({ region });
		this.setState({ region });
	};

	render = () => {
		const { articles, whiskeys } = this.props;
		const { region } = this.state;
		return (
			<HomeContainer>
				<h1>Whiskey Selection</h1>
				<RegionList onClick={this.filter} region={region} />
				<WhiskeyList>
					{whiskeys.map((whiskey) => (
						<NavItem
							key={`whiskey-${whiskey.title}`}
							to={whiskey.uri}
						>
							<Whiskey whiskey={whiskey} />
						</NavItem>
					))}
				</WhiskeyList>
				<Articles>
					{articles.map((article) => (
						<Article
							key={`article-${article.title}`}
							href={article.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={require(`../assets/${article.img}`)}
								alt={article.title}
							/>
							<ArticleContent>
								<h2>{article.title}</h2>
								<p>{article.teaser}</p>
							</ArticleContent>
						</Article>
					))}
				</Articles>
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
