import BoardList from 'components/BoardList';
import CommentItem from 'components/CommentItem';
import Top3Item from 'components/Top3Item';
import FavoriteItem from 'components/FavoriteItem';
import { commentListMock, latestBoardListMock, top3BoardListMock, favoriteListMock } from 'mocks';
import React from 'react';
import './App.css';

function App() {
  return (
    <>

    <div style = {{display: 'flex', flexDirection: 'column', columnGap: '30px' , rowGap: '20px'}}> 
      {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem}/>)}

    </div>

      
    </>
  );
}

export default App;
