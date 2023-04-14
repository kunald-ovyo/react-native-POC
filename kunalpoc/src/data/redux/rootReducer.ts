import {combineReducers} from 'redux';
import allAssetsReducer from './AllAssets';

const rootReducer = combineReducers({
  allAssets: allAssetsReducer,
});

export default rootReducer;
