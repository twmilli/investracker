import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { addStockMiddleware } from './middleware';


const INITIAL_STATE = {};
const Store = createStore(reducers, INITIAL_STATE, applyMiddleware(ReduxThunk, addStockMiddleware));

export default Store;
