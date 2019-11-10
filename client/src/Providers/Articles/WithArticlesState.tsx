import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchArticles, addArticle } from '../../store/articles';
// import ArticlesService from '../../services/ArticlesService';
import Spinner from '../../components/Spinner';

import { IArticle } from '../../services/ArticlesService';
// import { ArticlesState } from '../../../../store/articles/reducer';

export interface InjectedProps {
  articles: IArticle;
  fetchArticles: any;
};

export interface ExternalProps extends InjectedProps {
  loading: boolean;
  error: any;
  addArticle: any;
};

const WithArticlesState = (Wrapped: React.ComponentType<InjectedProps>) => {
  class HOC extends Component<ExternalProps> {
    componentDidMount() {
      this.props.fetchArticles();
    }

    render() {
      const { loading, error, articles, ...props } = this.props;
      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <p>{error.message}</p>;
      }

      return (
        <Wrapped articles={articles} {...props} />
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
        fetchArticles,
        addArticle,
      },
      dispatch);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
}

export default WithArticlesState;