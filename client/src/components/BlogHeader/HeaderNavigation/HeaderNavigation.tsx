import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
};

const HeaderNavigation: React.SFC<Props> = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/articles/">Articles</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  );
};

export default HeaderNavigation;
