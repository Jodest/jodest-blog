import React from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchArticles } from '../../../store/articles';
import ArticlesService from '../../../services/ArticlesService';
import Article from '../Article';
import Spinner from '../../Spinner';
import WithArticlesState from './container';


export interface Props {
  fetchArticles: any;
  updateArticles: any;
  articles: any;
  loading: any;
  error: any;
};

class ArticlesPage extends React.Component<Props> {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchArticles();
  }

  render() {
    const { articles, loading, error } = this.props;
    console.log(this.props);
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <div>Error</div>;
    }

    return (
      <div>
        <ul className="article-list">
          {
            articles.map(({title, author, image, date, text}: any, ind: number) => (
              <li key={ind}>
                <Article
                  title={title}
                  author={author}
                  image={image}
                  date={date}
                  text={text}
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ updateArticles: { articles, loading, error } }: any) => ({
  articles, loading, error
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchArticles: fetchArticles(new ArticlesService()),
  }, dispatch);
};

export default compose(
  //!
  // WithArticlesState,
  connect(mapStateToProps, mapDispatchToProps),
  // WithArticlesState,
)(ArticlesPage);
