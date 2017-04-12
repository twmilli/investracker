import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';


const INITIAL_STATE = {};
const Store = createStore(reducers, INITIAL_STATE, applyMiddleware(ReduxThunk));

export default Store;
