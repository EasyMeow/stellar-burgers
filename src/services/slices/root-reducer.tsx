import { combineReducers } from '@reduxjs/toolkit';
import ingredientReducer from './ingredientSlice/ingredientSlice';
import constructorReducer from './constructorSlice/constructorSlice';
import orderReducer from './orderSlice/orderSlice';
import feedReducer from './feedSlice/feedSlice';
import userReducer from './userSlice/userSlice';

export const rootReducer = combineReducers({
  ingredient: ingredientReducer,
  constructorItems: constructorReducer,
  order: orderReducer,
  feed: feedReducer,
  user: userReducer
});
