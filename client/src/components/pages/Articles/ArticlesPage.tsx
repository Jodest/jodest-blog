import React from 'react';
import { compose } from 'redux';

import Article from '../Article';
import WithArticlesState from './container';


export interface Props {
  articles: any;
  fetchArticles: any;
};

class ArticlesPage extends React.Component<Props> {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    console.log(this.props);
    return (
      <div></div>
    );
  }
}

export default compose(
  WithArticlesState,
)(ArticlesPage);
