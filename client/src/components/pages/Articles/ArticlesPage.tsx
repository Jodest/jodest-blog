import React from 'react';
import { compose } from 'redux';

import Article from '../Article';
import WithArticlesState from './container';

import { IArticle } from '../../../services/ArticlesService';

interface ArticleData {
  [x: string]: any;
  title: string;
  author: string;
  image: string;
  date: Date;
  text: string;
}
interface Props {
  articles: IArticle;
};

const ArticlesPage: React.SFC<Props> = ({ articles }) => (
  <div>
    <ul className="article-list">
      {
        articles.map(({title, author, image, date, text}: IArticle, ind: number) => (
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

export default compose(
  WithArticlesState,
)(ArticlesPage);
