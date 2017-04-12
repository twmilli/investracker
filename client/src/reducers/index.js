import { combineReducers } from 'redux';
import StockReducer from './StockReducer';


export default combineReducers({
  stocks: StockReducer
});
