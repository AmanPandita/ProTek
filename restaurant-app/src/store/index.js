import rootSaga from './sagas';


import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import categoriesReducer from './reducers/categoriesReducer';
import menuItemsReducer from './reducers/menuItemsReducer';
import { fetchCategoriesSaga, fetchMenuItemsSaga } from './sagas';


const rootReducer = combineReducers({
  categories: categoriesReducer,
  menuItems: menuItemsReducer,
});


const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);


sagaMiddleware.run(rootSaga);

export default store;
