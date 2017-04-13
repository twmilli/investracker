import {
  STOCK_FETCH_SUCCESS
} from './types';

export const getStockData = ({ symbols, from, to }) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/?symbols=${symbols.toString()}&from=${from}&to=${to}`)
    .then((response) => {
      response.json()
      .then((json) => {
        dispatch({type: STOCK_FETCH_SUCCESS, payload: json});
      });
    });
  };
};
