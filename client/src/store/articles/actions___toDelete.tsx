import { Dispatch } from 'redux';

import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLES_REQUEST,
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
  console.log(newArticles);
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

const addArticleRequested = () => {
  return {
    type: ADD_ARTICLES_REQUEST
  };
};

const fetchArticles = (articlesService: any) => () => (dispatch: Dispatch) => {
  dispatch(articlesRequested());
  articlesService.getArticles()
    .then((data: IArticle[]) => dispatch(articlesLoaded(data)))
    .catch((err: any) => dispatch(articlesError(err)));
};

const addArticle = (articlesService: any) => (article: any) => (dispatch: Dispatch) => {
  dispatch(addArticleRequested());
  articlesService.createArticles(article)
    .then((data: IArticle[]) => dispatch(articlesLoaded(data)))
    .catch((err: any) => dispatch(articlesError(err)));
};

export {
  fetchArticles,
  addArticle,
};