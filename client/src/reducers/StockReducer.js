import {
  STOCK_FETCH_SUCCESS,
  ADD_STOCK,
  STOCK_TEXT_UPDATE,
  SET_ERROR,
  CLEAR_ERROR,
  REMOVE_STOCK,
  SET_DATE
} from '../actions/types';


const currDate = new Date();
const from = new Date();
from.setYear(from.getFullYear() - 1);

const INITIAL_STATE = {
  from,
  to: currDate,
  list:['AAPL','AMZN', 'GOOGL'],
  stockData:{},
  stockText: '',
  error:'',
  dateOption:'1y'
};
const StockReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case STOCK_FETCH_SUCCESS:
      return {...state, stockData: { ...state.stockData, ...action.payload } };
    case ADD_STOCK:
      return {...state, list: [...state.list, action.payload], stockText:'', error:''};
    case STOCK_TEXT_UPDATE:
      return { ...state, stockText: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: ''};
    case REMOVE_STOCK:
      const index = state.list.indexOf(action.payload);
      return { ...state,
        list:[...state.list.slice(0,index), ...state.list.slice(index+1)]
      };
    case SET_DATE:
      const { from, data, dateOption } = action.payload;
      return { ...state, from, stockData: data, dateOption };
    default:
      return state;
  }
};

export default StockReducer;
