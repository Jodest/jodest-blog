import React from 'react';
import { compose } from 'redux';

import Article from '../Article';
import WithArticlesState from './container';


export interface Props {
  articles: any;
};

const ArticlesPage: React.SFC<Props> = ({ articles }) => (
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

export default compose(
  //!
  WithArticlesState,
  // WithArticlesState,
)(ArticlesPage);
