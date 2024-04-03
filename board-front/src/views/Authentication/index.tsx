import InputBox from 'components/InputBox';
import React, { useRef, useState, KeyboardEvent } from 'react'
import './style.css'

export default function Authentication() {

  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  const SignInCard = () => {

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);


    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
    const [error, setError] = useState<boolean>(false);

    const [passwordButtonIcon, setPasswordButtonIcon] = useState<'eye-light-off-icon' | 'eye-light-on-icon'> ('eye-light-off-icon');


    const onSignInButtonClickHandler = () => {

    }
    const onPasswordButtonClickHandler = () => {
      if (passwordType === 'text') {
        setPasswordType('password');
        setPasswordButtonIcon('eye-light-off-icon');
      }
      else {
        setPasswordType('text');
        setPasswordButtonIcon('eye-light-on-icon');
      }
    }

    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== 'Enter') return;
      if (!passwordRef.current) return;
      passwordRef.current.focus();
    }

    const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== 'Enter') return;
      onSignInButtonClickHandler();
    }


    return (
      <div className='auth-card'>
        <div className='auth-card-box'>
          <div className='auth-card-top'>
            <div className='auth-card-title-box'>
              <div className='auth-card-title'>{'로그인'}</div>
            </div>
            <InputBox ref={emailRef} label = '이메일 주소' type='text' placeholder='이메일 주소를 입력해 주세요' error={error} value={email} setValue={setEmail} onKeyDown={onEmailKeyDownHandler}/>
            <InputBox ref={passwordRef}label = '패스워드' type={passwordType} placeholder='비밀번호를 입력해주세요' error={error} value={password} setValue={setPassword} icon={passwordButtonIcon} onButtonClick={onPasswordButtonClickHandler} onKeyDown={onPasswordKeyDownHandler}/>
          </div>
          <div className='auth-cart-bottom'>
            <div className='auth-sign-in-error-box'>
              <div className='auth-sign-in-error-message'>
                {'이메일 주소 또는 비밀번호를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요.'}
              </div>
            </div>
            <div className='black-large-full-button' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
            <div className='auth-description-box'>
              <div className='auth-description'>{'신규 사용자이신가요?'} <span className='auth-description-link'>{'회원가입'}</span></div>
            </div>
          </div>
        </div>
      </div>
    );



  };

  const SignUpCard = () => {
    return (
      <div className='auth-card'></div>
    );
    
  };

  return (
    <div id='auth-wrapper'>
      <div className='auth-container'>
        <div className='auth-jumbotron-box'>
          <div className='auth-jumbotron-contents'>
            <div className='auth-logo-icon'></div>
            <div className='auth-jumbotron-text-box'>
              <div className='auth-jumbotron-text'>{'welcome'}</div>
              <div className='auth-jumbotron-text'>{'Taegeon yipnida'}</div>
            </div>
          </div>
        </div>
        {view === 'sign-in' && <SignInCard/>}
        {view === 'sign-up' && <SignUpCard/>}
      </div>
    </div>
  )
}
