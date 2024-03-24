import BoardList from 'components/BoardList';
import Top3Item from 'components/Top3Item';
import { latestBoardListMock, top3BoardListMock } from 'mocks';
import React from 'react';
import './App.css';

function App() {
  return (
    <>

      <div style={ { display: 'flex', justifyContent: 'center', gap: '24px' }}>
        {top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem}/> )}

      </div>
      {latestBoardListMock.map(boardListItem => <BoardList boardListItem={boardListItem} />)}
    </>
  );
}

export default App;
