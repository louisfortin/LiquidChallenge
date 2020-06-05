import { SET_COLLECTION } from '../actionTypes';

export const addProductCollection = (name, values) => ({
  type: SET_COLLECTION,
  payload: {
    name,
  	values
  }
});