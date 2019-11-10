import { Dispatch } from 'redux';

import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from '../constants';

import { IArticle } from '../../services/ArticlesService';


export interface ArticlesAction {
  type: string;
  payload: any;
}

const articlesRequested = () => {
  return {
    type: FETCH_ARTICLES_REQUEST
  };
};

const articlesLoaded = (newArticles: IArticle[]): ArticlesAction => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: newArticles
  };
};

const articlesError = (error: any): ArticlesAction => {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error
  };
};

const fetchArticles = (articlesService: any) => () => (dispatch: Dispatch) => {
  dispatch(articlesRequested());
  articlesService.getArticles()
    .then((data: IArticle[]) => dispatch(articlesLoaded(data)))
    .catch((err: any) => dispatch(articlesError(err)));
};

export {
  fetchArticles,
};