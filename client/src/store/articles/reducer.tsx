import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLES,
} from '../constants';

import { ArticlesAction } from './actions';

import { IArticle } from '../../services/ArticlesService';


export interface ArticlesState {
  articles: IArticle[];
  loading: boolean,
  error: boolean | null;
}

const initState: ArticlesState = {
  articles: [],
  loading: true,
  error: null,
};

const updateArticles = (state: ArticlesState = initState, {type, payload}: ArticlesAction): ArticlesState => {

  switch (type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        articles: [],
        loading: true,
        error: null
      }
    case FETCH_ARTICLES_SUCCESS:
      return {
        articles: payload,
        loading: false,
        error: null
      }
    case FETCH_ARTICLES_FAILURE:
      return {
        articles: [],
        loading: false,
        error: payload
      }
    default:
      return state;
  }
};

export default updateArticles;