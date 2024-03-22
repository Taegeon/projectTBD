import BoardList from 'components/BoardList';
import { latestBoardListMock } from 'mocks';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {latestBoardListMock.map(boardListItem => <BoardList boardListItem={boardListItem} />)}
    </>
  );
}

export default App;
