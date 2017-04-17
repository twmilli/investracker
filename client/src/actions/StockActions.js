import {
  STOCK_FETCH_SUCCESS,
  ADD_STOCK,
  STOCK_TEXT_UPDATE,
  SET_ERROR,
  CLEAR_ERROR,
  REMOVE_STOCK,
  SET_DATE
} from './types';

export const getStockData = ({ symbols, from, to }) => {
  return (dispatch) => {
    fetch(`api/?symbols=${symbols.toString()}&from=${from}&to=${to}`)
    .then((response) => {
      response.json()
      .then((json) => {
        dispatch({type: STOCK_FETCH_SUCCESS, payload: json});
      });
    });
  };
};

export const addStock = ({ symbol, from, to }) => {
  const symbols = [symbol];
  const ERROR_TIME = 3000; //milliseconds
  return (dispatch) => {
    fetch(`api/?symbols=${symbols.toString()}&from=${from}&to=${to}`)
    .then((response) => {
      response.json()
      .then((json) => {
        if (json[symbol].length <= 0) {
          dispatch({ type: SET_ERROR, payload: 'Invalid Stock Code' });
          setTimeout(() => {
            dispatch({ type: CLEAR_ERROR });
          }, ERROR_TIME);
          return;
        }
        dispatch({type: ADD_STOCK, payload: symbol});
        dispatch({type: STOCK_FETCH_SUCCESS, payload: json});
      })
      .catch((error) => {
        console.log(error);
      });
    });
  };
}

export const stockTextUpdate = ({ value }) => {
  return {type: STOCK_TEXT_UPDATE, payload: value};
}

export const setError = (error) => {
  const ERROR_TIME = 3000;
  return ((dispatch) => {
    dispatch({type: SET_ERROR, payload: error});
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, ERROR_TIME);
  });
}

export const removeStock = ({ symbol }) => {
  return { type: REMOVE_STOCK, payload: symbol };
}

export const setDate = ({ symbols, from, to, option }) => {
  const dateCopy = new Date(to.getTime());
  const unit = option.slice(option.length-1);
  const n = parseInt(option.slice(0, option.length-1), 10);
  if (unit === 'm') {
    dateCopy.setMonth(dateCopy.getMonth()-n);
  } else{
    dateCopy.setYear(dateCopy.getFullYear()-n);
  }
  return (dispatch) => {
    fetch(`/api/?symbols=${symbols.toString()}&from=${dateCopy.toISOString()}&to=${to}`)
    .then((response) => {
      response.json()
      .then((json) => {
        dispatch({type: SET_DATE, payload: {from: dateCopy, dateOption: option, data: json}});
      });
    });
  };
}
