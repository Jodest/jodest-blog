import React from 'react';

interface Props {
  title: string;
  author: string;
  image: string;
  date: Date;
  text: string;
};

const Article: React.SFC<Props> = ({
  title,
  author,
  image,
  date,
  text
}) =>  (
    <div>
      <div>{title}</div>
      <img src={image} alt=""/>
      <p>{text}</p>
      <p>{date}</p>
      <p>{author}</p>
    </div>
);

export default Article;