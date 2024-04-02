import * as types from '../actions/types';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case types.FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
