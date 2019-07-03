import {
  ARTICLES_LOADED
} from '../constants';

import { ArticlesLoadedAction } from './actions';


export interface ArticlesState {
  data: object;
}

const initState: ArticlesState = {
  data: [],
};

const articles = (state:ArticlesState = initState, {type, payload}: ArticlesLoadedAction) => {

  switch (type) {
    case ARTICLES_LOADED:
      return {
        data: payload
      }
    default:
      return state;
  }
};

export default articles;