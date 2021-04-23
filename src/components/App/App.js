import React from 'react';
import ProductsList from '../ProductsList';
import ProductDetails from '../ProductDetails';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ProductsList} />
        <Route path="/:id" render={({ match }) => {
          return <ProductDetails itemId={match.params.id} exact />
        }} />
      </Switch>

    </div>
  );
}

export default App;
