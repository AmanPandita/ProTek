import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import menuItemsReducer from './menuItemsReducer';

export default combineReducers({
  categories: categoriesReducer,
  menuItems: menuItemsReducer,
});
