import React from 'react';
import { RouteComponentProps } from "react-router";
import { compose } from 'redux';

import Article from '../Article';
import WithArticlesState from './container';


interface Props {
  articles: any;
};

class ArticlesPage extends React.Component<Props> {
  render() {
    return (
      <div></div>
    );
  }
}

// export default ArticlesPage;

export default compose(
  WithArticlesState,
)(ArticlesPage);
