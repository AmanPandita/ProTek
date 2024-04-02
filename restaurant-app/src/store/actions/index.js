import * as types from './types';

export const fetchCategories = () => ({
  type: types.FETCH_CATEGORIES_REQUEST,
});

export const fetchMenuItems = (category) => ({
  type: types.FETCH_MENU_ITEMS_REQUEST,
  payload: category,
});
