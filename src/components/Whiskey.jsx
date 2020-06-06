import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import TasteMap from './TastesMap';
import background from '../assets/card-bg.svg';
import colors from '../constants/regionColors';


const Article = styled('div')`
	position: relative;
`;

const Product = styled('div')`
	display: flex;
	height: 544px;
	background-color: #2a2a2a;
	background-image: url(${background});
	border-radius: 5px;
`;

const ProductInfo = styled('div')`
	text-align: left;
	color: white;
	margin: 0 36px;
	min-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	text-transform: capitalize;

	h2 {
		font-weight: bold;
		font-size: 36px;
		color: white;
	}
	p {
		margin-top: -5px;
		font-weight: regular;
		font-size: 18px;
		color: #6c6b6a;
	}
`;

const ProductImage = styled('img')`
	min-width: 160px;
	max-width: 205px;
	margin-bottom: -20px;
	z-index: 0;
	position: relative;
	display: block;
`;

const MarkContainer = styled('div')`
	width: 100%
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: flex-end;
	margin: auto;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const RegionMark = styled('span')`
	position: relative;
	width: 60px;
	height: 4px;
	display: block;
	z-index: 1;
	top: 50px;
	left: 10px;
	background: ${({ region }) => `linear-gradient(to right, ${colors[region].from}, ${colors[region].to})`};
`;

const price = (value) => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
}).format(value)

class Whiskey extends Component {
	render = () => {
		const { whiskey: { image, title, region, cost, tasting_notes }} = this.props;
		return (
			<>
				{title && (
					<Article>
						<Product>
							<ProductInfo>
								<h2>{title}</h2>
								<p>{region} region</p>
								<h2>{price(cost)}</h2>
								<TasteMap region={region} tastes={tasting_notes} />
							</ProductInfo>
								<ProductImage src={require(`../assets/${image}`)} />
						</Product>
						<MarkContainer>
							<RegionMark region={region} />
						</MarkContainer>
					</Article>
				)}
			</>
		)
	}
};

Whiskey.propTypes = {
  whiskey: PropTypes.any.isRequired
};

export default Whiskey;
