import {
  ARTICLES_LOADED,
} from '../constants';


export interface ArticlesLoadedAction {
  type: ARTICLES_LOADED;
  payload: object;
}

export const articlesLoaded = (data: object): ArticlesLoadedAction => ({
  type: ARTICLES_LOADED,
  payload: data
});