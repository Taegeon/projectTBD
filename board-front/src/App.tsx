import BoardList from 'components/BoardList';
import CommentItem from 'components/CommentItem';
import Top3Item from 'components/Top3Item';
import FavoriteItem from 'components/FavoriteItem';
import { commentListMock, latestBoardListMock, top3BoardListMock, favoriteListMock } from 'mocks';
import React, { useEffect, useState } from 'react';
import './App.css';
import InputBox from 'components/InputBox';
import Footer from 'layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main'
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import UserP from 'views/User';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import BoardDetail from 'views/Board/Detail';
import Container from 'layouts/Container';
import { MAIN_PATH } from 'constant';
import { AUTH_PATH } from 'constant';
import { SEARCH_PATH } from 'constant';
import { USER_PATH } from 'constant';
import { BOARD_PATH } from 'constant';
import { BOARD_WRITE_PATH } from 'constant';
import { BOARD_DETAIL_PATH } from 'constant';
import { BOARD_UPDATE_PATH } from 'constant';
import { useLoginUserStore } from 'stores';
import { useCookies } from 'react-cookie';
import { getSignInUserRequest } from 'apis';
import { ResponseDto } from 'apis/response';
import { User } from 'types/interface';
import { GetSignInUserResponseDto } from 'apis/response/user';



function App() {
  const {setLoginUser, resetLoginUser} = useLoginUserStore();
  const [cookies, setCookie] = useCookies();
  const getSignInUserResponse = (responseBody: GetSignInUserResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody;
    if (code === 'AF' || code === 'NU' || code === 'DBE') {
      resetLoginUser();
      return;
    }
    const loginUser: User = { ... responseBody as GetSignInUserResponseDto};
    setLoginUser(loginUser);
  }



  //effect : it runs when accessToken cookie is changed
  useEffect(() => {
    if (!cookies.accessToken) {
      resetLoginUser();
      return;
    }
    getSignInUserRequest(cookies.accessToken).then(getSignInUserResponse);

  }, [cookies.accessToken]);



  return (
    <Routes>
      <Route element={<Container/>}>
        <Route path={MAIN_PATH()} element={<Main/>}/>
        <Route path={AUTH_PATH()} element={<Authentication/>}/>
        <Route path={SEARCH_PATH(':searchWord')} element={<Search/>}/>
        <Route path={USER_PATH(':userEmail')} element={<UserP/>}/>
        <Route path={BOARD_PATH()}>
          <Route path={BOARD_WRITE_PATH()} element={<BoardWrite/>}/>
          <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<BoardDetail/>}/>
          <Route path={BOARD_UPDATE_PATH(':boardNumber')} element={<BoardUpdate/>}/>
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
