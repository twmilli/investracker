import {
  STOCK_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {stockData:{}};
const StockReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case STOCK_FETCH_SUCCESS:
      return {...state, stockData: action.payload};
    default:
      return state;
  }
};

export default StockReducer;
