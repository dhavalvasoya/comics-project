import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import logger from 'redux-logger'

import rootReducer from './redux/RootReducer';

const store = createStore(rootReducer,composeWithDevTools( applyMiddleware( thunk)))

export default store