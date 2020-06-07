import { FETCH_COLLECTION, SET_COLLECTION, SET_COLLECTION_ELEMENT } from '../actionTypes';

export const fetchProducts = () => ({
  type: FETCH_COLLECTION
})

export const setProductCollection = (name, values) => ({
  type: SET_COLLECTION,
  payload: {
    name,
  	values
  }
});

export const setProductCollectionElement = (name, value, idAttr) => ({
  type: SET_COLLECTION_ELEMENT,
  payload: {
    name,
    value,
    idAttr
  }
});