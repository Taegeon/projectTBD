import BoardList from 'components/BoardList';
import CommentItem from 'components/CommentItem';
import Top3Item from 'components/Top3Item';
import FavoriteItem from 'components/FavoriteItem';
import { commentListMock, latestBoardListMock, top3BoardListMock, favoriteListMock } from 'mocks';
import React, { useState } from 'react';
import './App.css';
import InputBox from 'components/InputBox';

function App() {

  const [value, setValue] = useState<string>('');



  return (
    <>

      <InputBox label = 'email' type = 'text' placeholder='please type the email' value={value} error={false} setValue={setValue}/>

      
    </>
  );
}

export default App;
