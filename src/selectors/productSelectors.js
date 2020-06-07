import { ARTICLES, WHISKEYS } from '../constants/productTypes';

export const productLoader = (state) => state.collections.loader;

export const selectWhiskeys = (state) => state.collections[WHISKEYS];
export const selectWhiskey = (state, id) => state.collections[WHISKEYS]
	.find((whiskey) => whiskey && whiskey.title.toLowerCase() === id);

export const selectArticles = (state) => state.collections[ARTICLES];
export const selectArticle = (state, id) => state.collections[ARTICLES]
	.find((article) => article && article.title.toLowerCase() === id);
