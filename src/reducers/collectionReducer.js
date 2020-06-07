import {
  FETCH_COLLECTION,
  RESET_COLLECTION,
  SET_COLLECTION,
  SET_COLLECTION_ELEMENT
} from '../actionTypes';
import { ARTICLES, WHISKEYS } from '../constants/productTypes';
import { replaceOrAddCollectionElement } from './index';

export const initialCollectionState = [];

const initialState = {
  [ARTICLES]: [ ...initialCollectionState ],
  [WHISKEYS]: [ ...initialCollectionState ],
  loader: false
};

/**
 * This reducer keeps references to certain collections of data
 */
const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION: {
      return {
        ...state,
        loader: true
      };
    }
    case SET_COLLECTION: {
      const { name, values } = action.payload;
      return {
        ...state,
        [name]: [ ...values ],
        loader: false
      };
    }
    case SET_COLLECTION_ELEMENT: {
      const { name, value, idAttr } = action.payload;
      return {
        ...state,
        [name]: replaceOrAddCollectionElement(state[name], value, idAttr),
        loader: false
      };
    }
    case RESET_COLLECTION: {
      const { name } = action.payload;
      return {
        ...state,
        [name]: [ ...initialCollectionState ],
        loader: false
      };
    }
    default: {
      return state;
    }
  }
};

export default collectionReducer;
