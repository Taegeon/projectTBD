import { AUTH_PATH, MAIN_PATH, SEARCH_PATH, USER_PATH } from 'constant';
import React, { ChangeEvent, useRef, useState, KeyboardEvent, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom'
import { useLoginUserStore } from 'stores';
import './style.css'

export default function Header() {


  const { loginUser, setLoginUser, resetLoginUser} = useLoginUserStore();
  const [cookies, setCookie] = useCookies();
  const [isLogin, setLogin] = useState<boolean>(false);

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
      navigate(MAIN_PATH());
    };

    const onSignInButtonClickHandler = () => {
      navigate(AUTH_PATH());
    };


    if (isLogin && userEmail)
    return <div className='white-button' onClick={onSignOutButtonClickHandler}>{'Sign out'}</div>;

    if (isLogin)
    return <div className='white-button' onClick={onMyPageButtonClickHandler}>{'My Page'}</div>;

    return <div className='black-button' onClick={onSignInButtonClickHandler}>{'Log In'}</div>;
  }

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

          <SearchButton/>
          <MyPageButton/>
        </div>

      </div>
    </div>
  )
}
