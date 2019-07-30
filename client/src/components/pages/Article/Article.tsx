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
}) =>  {
  const labelDate = new Date(date).toUTCString();
  return (
    <div>
      <div>{title}</div>
      <img src={image} alt=""/>
      <p>{text}</p>
      <p>{labelDate}</p>
      <p>{author}</p>
    </div>
)};

export default Article;