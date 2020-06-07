import { fetchProducts, setProductCollection, setProductCollectionElement } from './collectionActions';
import { ARTICLES, WHISKEYS } from '../constants/productTypes';
import { fetchArticles, fetchWhiskey, fetchWhiskeys } from '../api/productApi';

export const getArticles = () => (dispatch) => {
  dispatch(fetchProducts());
  return fetchArticles()
    .then((data) => dispatch(setProductCollection(ARTICLES, data)));
};

export const getWhiskeys = (filter) => (dispatch) => {
  dispatch(fetchProducts());
  return fetchWhiskeys(filter)
    .then((data) => dispatch(setProductCollection(WHISKEYS, data)));
} ;

export const getWhiskey = (id) => (dispatch) => {
  dispatch(fetchProducts());
  return fetchWhiskey(id)
    .then((data) => dispatch(setProductCollectionElement(WHISKEYS, data, 'title')));
};
