import React from 'react';
import { compose } from 'redux';

import Article from '../Article';
import WithArticlesState from '../../../Providers/Articles';

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
  fetchArticles: any;
};

class ArticlesPage extends React.Component<Props> {
  componentDidMount() {
    // this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
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
    )
  }
}

// const ArticlesPage: React.SFC<Props> = ({ articles }) => (
//   <div>
//     <ul className="article-list">
//       {
//         articles.map(({title, author, image, date, text}: IArticle, ind: number) => (
//           <li key={ind}>
//             <Article
//               title={title}
//               author={author}
//               image={image}
//               date={date}
//               text={text}
//             />
//           </li>
//         ))
//       }
//     </ul>
//   </div>
// );

export default compose(
  WithArticlesState,
)(ArticlesPage);
