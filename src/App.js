import React from 'react';
import {Col, Row} from 'react-materialize';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import GameList from './components/GameList';
import Auth from './components/Auth';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <Auth>
            <GameList />
          </Auth>
        </Col>
      </Row>
    </PersistGate>
  </Provider>
);

export default App;
