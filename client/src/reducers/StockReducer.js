import {
  STOCK_FETCH_SUCCESS
} from '../actions/types';
const currDate = new Date();
const from = new Date();
from.setYear(from.getFullYear() - 1);
console.log(from.getFullYear());
console.log(currDate.getFullYear());

const INITIAL_STATE = { from, to: currDate, list:['AAPL','AMZN', 'GOOGL'], stockData:{} };
const StockReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case STOCK_FETCH_SUCCESS:
      return {...state, stockData: action.payload};
    default:
      return state;
  }
};

export default StockReducer;
