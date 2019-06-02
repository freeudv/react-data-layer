import {pick} from 'lodash-es';
import React, {useEffect} from 'react';
import {Collection, CollectionItem, Button} from 'react-materialize';
import {connect} from 'react-redux';
import {addGame, loadGames} from '../../store/games/actions.js';
import {logOut} from '../../store/login/actions';
import AddGameForm from '../AddGameForm/index.js';
import LoadingIndicator from '../LoadingIndicator';

const GameList = ({games, addGame, loadGames, logOut, loading, error}) => {
  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div>
      <AddGameForm onAddGame={addGame} />

      <Button onClick={loadGames}>Reload</Button>
      <Button onClick={logOut}>Log Out</Button>

      <LoadingIndicator loading={loading} error={error}>
        <Collection header="Video Games">
          {games.map(game => (
            <CollectionItem key={game.id}>
              {game.attributes.title}
            </CollectionItem>
          ))}
        </Collection>
      </LoadingIndicator>
    </div>
  );
};

const mapStateToProps = state => {
  return pick(state.games, ['games', 'loading', 'error']);
};

const mapDispatchToProps = {
  addGame,
  loadGames,
  logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);
