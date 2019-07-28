import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators, Dispatch } from 'redux';

import { fetchArticles } from '../../../../store/articles';
import ArticlesService from '../../../../services/ArticlesService';
import Spinner from '../../../Spinner';

export interface Props {
  articles: any;
  loading: any;
  error: any;
  fetchArticles: any;
};

export interface Props2 {
  articles: any;
};

const WithArticlesState = (Wrapped: React.ComponentType<Props2>) => {
  return class extends Component<Props & Props2, {}> {
    componentDidMount() {
      console.log(this.props);
      this.props.fetchArticles();
    }

    render() {
      console.log(this.props);
      if (this.props.loading) {
        return <Spinner />;
      }

      if (this.props.error) {
        return <p>Error</p>;
      }

      return (
        <Wrapped articles={this.props.articles} {...this.props} />
      );
    }
  }
}

// const WithArticlesState = (Wrapped: React.SFC<Props>) => ({ articles, error, loading, ...props}: any): any => {
//   console.log(props);



//   if (loading) {
//     return <Spinner />;
//   }

//   if (error) {
//     return <p>Error</p>;
//   }

//   return (
//     <Wrapped articles={articles} {...props} />
//   );
// }

const mapStateToProps = ({ updateArticles: { articles, loading, error } }: any) => ({
  articles, loading, error
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