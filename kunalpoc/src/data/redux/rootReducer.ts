import {combineReducers} from 'redux';
import userReducer from './user';
import allAssetsReducer from './allAssets';

const rootReducer = combineReducers({
  user: userReducer,
  allAssets: allAssetsReducer,
});

export default rootReducer;
