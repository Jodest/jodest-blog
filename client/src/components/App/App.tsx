import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BlogHeader from '../BlogHeader';
import { HomePage, ArticlesPage, AboutPage, AdminPage } from '../pages';

const App = () => {
  return (
    <main role="main" className="container">
      <BlogHeader/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
        />
        <Route
          path="/articles"
          component={ArticlesPage}
        />
        <Route
            path="/articles/:id"
            render={({ match }) => {
                // const { id } = match.params;
                return <div>Hello id</div>
                // return <StarshipDetails itemId={id} />
            }}
        />
        <Route
          path="/about"
          component={AboutPage}
        />
        <Route
          path="/admin"
          component={AdminPage}
        />
      </Switch>
    </main>
  );
};

export default App;
