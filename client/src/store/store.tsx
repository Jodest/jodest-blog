import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';
import { ArticlesState } from './articles/reducer';

export interface IStore {
    articles: ArticlesState
}

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);

export default store;
