import { Dispatch } from 'redux';

import {
  ADD_ARTICLES_REQUEST,
  ADD_ARTICLES_SUCCESS,
  ADD_ARTICLES_FAILURE,
} from '../../constants';

import { IArticle } from '../../../services/ArticlesService';

import ArticlesService from '../../../services/ArticlesService';

const articlesService = new ArticlesService();


export interface AddArticleAction {
  type: string;
  payload: any;
}

const addArticleRequested = () => {
  return {
    type: ADD_ARTICLES_REQUEST
  };
};

const addArticleLoaded = (newArticles: IArticle[]): AddArticleAction => {
  return {
    type: ADD_ARTICLES_SUCCESS,
    payload: newArticles
  };
};

const addArticleError = (error: any): AddArticleAction => {
  return {
    type: ADD_ARTICLES_FAILURE,
    payload: error
  };
};

const addArticle = (article: any) => (dispatch: Dispatch) => {
  dispatch(addArticleRequested());
  articlesService.createArticles(article)
    .then((data: IArticle[]) => dispatch(addArticleLoaded(data)))
    .catch((err: any) => dispatch(addArticleError(err)));
};

export {
  addArticle,
};