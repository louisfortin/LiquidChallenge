import { ARTICLES, WHISKEYS } from '../constants/productTypes';

export const selectWhiskeys = (state) => state.collections[WHISKEYS];
export const selectWhiskey = (state, id) => state.collections[WHISKEYS]
	.find((whiskey) => whiskey.title === id);

export const selectArticles = (state) => state.collections[ARTICLES];
export const selectArticle = (state, id) => state.collections[ARTICLES]
	.find((article) => article.title === id);