import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchArticles } from '../../../../store/articles';
import ArticlesService from '../../../../services/ArticlesService';
import Spinner from '../../../Spinner';

import { IArticle } from '../../../../services/ArticlesService';
// import { ArticlesState } from '../../../../store/articles/reducer';

export interface InjectedProps {
  articles: IArticle;
};

export interface ExternalProps extends InjectedProps {
  loading: boolean;
  error: any;
  fetchArticles: any;
};

const WithArticlesState = (Wrapped: React.ComponentType<InjectedProps>) => {
  class HOC extends Component<ExternalProps> {
    componentDidMount() {
      this.props.fetchArticles();
    }

    render() {
      if (this.props.loading) {
        return <Spinner />;
      }

      if (this.props.error) {
        return <p>{this.props.error.message}</p>;
      }

      return (
        <Wrapped articles={this.props.articles} {...this.props} />
      );
    }
  }

  const mapStateToProps = ({ updateArticles: { articles, loading, error } }: any) => ({
    articles,
    loading,
    error
  });

  const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
      {
        fetchArticles: fetchArticles(new ArticlesService()),
      },
      dispatch);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
}

export default WithArticlesState;