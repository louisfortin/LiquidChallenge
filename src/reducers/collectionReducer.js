import { RESET_COLLECTION, SET_COLLECTION } from '../actionTypes';
import { ARTICLES, WHISKEYS } from '../constants/productTypes';

export const initialCollectionState = [];

const initialState = {
  [ARTICLES]: [ ...initialCollectionState ],
	[WHISKEYS]: [ ...initialCollectionState ]
};

/**
 * This reducer keeps references to certain collections of data
 */
const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    // @deprecated. Still here for BC.
    case SET_COLLECTION: {
      const { name, values } = action.payload;
      return {
        ...state,
        [name]: [ ...values ]
      };
    }
    case RESET_COLLECTION: {
      const { name } = action.payload;
      return {
        ...state,
        [name]: [ ...initialCollectionState ]
      };
    }
    default: {
      return state;
    }
  }
};

export default collectionReducer;
