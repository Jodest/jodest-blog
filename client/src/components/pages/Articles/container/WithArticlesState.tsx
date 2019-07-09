import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators, Dispatch } from 'redux';

import { fetchArticles } from '../../../../store/articles';
import ArticlesService from '../../../../services/ArticlesService';

export interface Props {
  articles: any;
  fetchArticles: any;
};

const WithArticlesState = (Wrapped: React.SFC<Props>) => (props: any): any => {
  if (props.loading) {
    return <p>Загрузка</p>;
  }

  if (props.error) {
    return <p>Ошибка</p>;
  }

  return (
    <Wrapped {...props} />
  );
}

const mapStateToProps = ({ updateArticles }: any) => ({
  updateArticles
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchArticles: fetchArticles(new ArticlesService()),
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithArticlesState
);