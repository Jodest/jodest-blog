import React from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchArticles } from '../../../store/articles';
import ArticlesService from '../../../services/ArticlesService';
import Article from '../Article';
import Spinner from '../../Spinner';
import WithArticlesState from './container';


export interface Props {
  articles: any;
  fetchArticles: any;
  updateArticles: any;
};

class ArticlesPage extends React.Component<Props> {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    console.log(this.props);
    if (this.props.updateArticles.loading) {
      return <Spinner />
    }

    if (this.props.updateArticles.error) {
      return <div>Error</div>;
    }

    return (
      <div>
        <Article
        title={this.props.updateArticles.articles[0].title}
        author={this.props.updateArticles.articles[0].author}
        image={this.props.updateArticles.articles[0].image}
        date={this.props.updateArticles.articles[0].date}
        text={this.props.updateArticles.articles[0].text}
        />
      </div>
    );
  }
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
  // WithArticlesState,
)(ArticlesPage);
