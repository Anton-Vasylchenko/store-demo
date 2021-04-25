import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsList from '../ProductsList';
import ProductDetails from '../ProductDetails';
import EmptyPage from '../EmptyPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ProductsList} />

        <Route path="/product/:id" render={({ match }) => {
          return <ProductDetails itemId={match.params.id} />
        }} />

        <Route path="*" component={EmptyPage} />
      </Switch>

    </div>
  );
}

export default App;
