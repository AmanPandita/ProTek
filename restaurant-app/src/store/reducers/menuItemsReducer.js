import * as types from '../actions/types';

const initialState = {
  menuItems: [],
  loading: false,
  error: null,
};

const menuItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MENU_ITEMS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_MENU_ITEMS_SUCCESS:
      return { ...state, loading: false, menuItems: action.payload };
    case types.FETCH_MENU_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default menuItemsReducer;
