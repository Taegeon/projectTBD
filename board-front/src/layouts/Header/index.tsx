import { fileUploadRequest, postBoardRequest } from 'apis';
import { PostBoardsRequestDto } from 'apis/request/board';
import { ResponseDto } from 'apis/response';
import { PostBoardResponseDto } from 'apis/response/board';
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, SEARCH_PATH, USER_PATH } from 'constant';
import React, { ChangeEvent, useRef, useState, KeyboardEvent, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useBoardStore, useLoginUserStore } from 'stores';
import './style.css'

export default function Header() {


  const { loginUser, setLoginUser, resetLoginUser} = useLoginUserStore();
  const { pathname } = useLocation();
  const [cookies, setCookie] = useCookies();
  const [isLogin, setLogin] = useState<boolean>(false);

  const [isAuthPage, setAuthPage] = useState<boolean>(false);
  const [isMainPage, setMainPage] = useState<boolean>(false);
  const [isSearchPage, setSearchPage] = useState<boolean>(false);
  const [isBoardDetailPage, setBoardDetailPage] = useState<boolean>(false);
  const [isBoardWritePage, setBoardWritePage] = useState<boolean>(false);
  const [isBoardUpdatePage, setBoardUpdatePage] = useState<boolean>(false);
  const [isUserPage, setUserPage] = useState<boolean>(false);



  





  const navigate = useNavigate();

  const onLogoClickHandler = () => {
    navigate(MAIN_PATH());
  }


  const SearchButton = () => {
    const searchButtonRef = useRef<HTMLDivElement | null>(null);


    const [status, setStatus] = useState<boolean>(false);
    const [word, setWord] = useState<string>('');
    const {searchWord} = useParams();

    const onSearchButtonClickHandler = () => {
      if (!status) {
        setStatus(!status);
        return;
      }

      navigate(SEARCH_PATH(word));
    };

    useEffect(() => {
      if (searchWord) {
        setWord(searchWord);
        setStatus(true);
      }
      
    }, [searchWord]);


    const onSearchWordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setWord(value);
    };

    
    const onSearchWordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== 'Enter') return;
      if (!searchButtonRef.current) return;
      searchButtonRef.current.click();
    };


    if (!status)
    return <div className='icon-button' onClick={onSearchButtonClickHandler}><div className='icon search-light-icon'></div></div>;

    return (
      <div className='header-search-input-box'>
        <input className='header-search-input' type='text' placeholder='please search words' value = {word} onChange={onSearchWordChangeHandler}
        onKeyDown={onSearchWordKeyDownHandler}/>
        <div ref={searchButtonRef} className='icon-button' onClick={onSearchButtonClickHandler}>
          <div className='icon search-light-icon'></div>
        </div>
      </div>
    )
  }

  const MyPageButton = () =>{

    const { userEmail } = useParams();

    const onMyPageButtonClickHandler = () => {
      if (!loginUser) return;
      const { email } = loginUser;
      navigate(USER_PATH(email));
    };

    const onSignOutButtonClickHandler = () => {
      resetLoginUser();
      setCookie('accessToken', '', {path: MAIN_PATH(), expires: new Date()});
      navigate(MAIN_PATH());
    };

    const onSignInButtonClickHandler = () => {
      navigate(AUTH_PATH());
    };


    if (isLogin && userEmail === loginUser?.email)
    return <div className='white-button' onClick={onSignOutButtonClickHandler}>{'Sign out'}</div>;

    if (isLogin)
    return <div className='white-button' onClick={onMyPageButtonClickHandler}>{'My Page'}</div>;

    return <div className='black-button' onClick={onSignInButtonClickHandler}>{'Log In'}</div>;
  };


  const UploadButton = () => {

    const { title, content, boardImageFileList, resetBoard } = useBoardStore(); 
    
    const postBoardResponse = (responseBody: PostBoardResponseDto | ResponseDto | null) => {
      if (!responseBody) return;
      const { code } = responseBody;
      if (code === 'DBE') alert('데이터베이스 오류입니다.');
      if (code === 'AF' || code === 'NU') navigate(AUTH_PATH());
      if (code === 'VF') alert('제목과 내용은 필수입니다.');
      if (code !== 'SU') return;

      resetBoard();
      if (!loginUser) return;
      const { email } = loginUser;
      navigate(USER_PATH(email));
    }

    const onUploadButtonClickHandler = async() => {
      const accessToken = cookies.accessToken;
      if (!accessToken) return;

      const boardImageList: string[] = [];
      
      for (const file of boardImageFileList) {
        const data = new FormData();
        data.append('file', file);

        const url = await fileUploadRequest(data);
        if (url) boardImageList.push(url);
      }

      const requestBody: PostBoardsRequestDto = {
        title, content, boardImageList
      }

      postBoardRequest(requestBody, accessToken).then(postBoardResponse);


    }

    if (title && content)
    return <div className='black-button' onClick={onUploadButtonClickHandler}>{'Upload'}</div>

    return <div className='disable-button'>{'Upload'}</div>
  }

  useEffect(() => {
    const isAuthPage = pathname.startsWith(AUTH_PATH());
    setAuthPage(isAuthPage);
    const isMainPage = pathname === MAIN_PATH();
    setMainPage(isMainPage);
    const isSearchPage = pathname.startsWith(SEARCH_PATH(''));
    setSearchPage(isSearchPage);
    const isBoardDetailPage = pathname.startsWith(BOARD_PATH() + '/' + BOARD_DETAIL_PATH(''));
    setBoardDetailPage(isBoardDetailPage);
    const isBoardWritePage = pathname.startsWith(BOARD_PATH() + '/' +BOARD_WRITE_PATH());
    setBoardWritePage(isBoardWritePage);
    const isBoardUpdatePage = pathname.startsWith(BOARD_PATH() + '/' +BOARD_UPDATE_PATH(''));
    setBoardUpdatePage(isBoardUpdatePage);
    const isUserPage = pathname.startsWith(USER_PATH(''));
    setUserPage(isUserPage);
  }, [pathname]);

  useEffect(() => {
    setLogin(loginUser !== null);
  }, [loginUser])




  return (
    <div id='header'>
      <div className='header-container'>
        <div className='header-left-box' onClick={onLogoClickHandler}>
          <div className='icon-box'>
            <div className='icon logo-dark-icon'></div>


          </div>
          <div className='header-logo'>{'Taegeon Website'}</div>
        </div>
        <div className='header-right-box'>
          {(isAuthPage || isMainPage || isSearchPage || isBoardDetailPage) && <SearchButton/>}
          {(isMainPage || isSearchPage || isBoardDetailPage || isUserPage) && <MyPageButton/>}
          {(isBoardWritePage || isBoardUpdatePage) && <UploadButton/>}
        </div>

      </div>
    </div>
  )
}
