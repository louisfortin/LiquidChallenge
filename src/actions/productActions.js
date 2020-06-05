import { addProductCollection } from './collectionActions';
import { ARTICLES, WHISKEYS } from '../constants/productTypes';
import { fetchArticles, fetchWhiskeys } from '../api/productApi';

export const getArticles = () => dispatch => fetchArticles()
  .then((data) => dispatch(addProductCollection(ARTICLES, data)));

export const getWhiskeys = () => dispatch => fetchWhiskeys()
  .then((data) => dispatch(addProductCollection(WHISKEYS, data)));
