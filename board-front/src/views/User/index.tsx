import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import DefaultProfileImage from 'assets/image/Default_pfp.png'
import { useParams } from 'react-router-dom';

export default function User() {
  const { userEmail } = useParams();
  const UserTop = () => {

    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const [isMyPage, setMyPage] = useState<boolean>(true);
    const [isNicknameChange, setNicknameChange] = useState<boolean>(false);
    const [nickname, setNickname] = useState<string>('');
    const [changeNickname, setChangeNickname] = useState<string>('');
    const [profileImage, setProfileImage] = useState<string | null>(null);

    useEffect(() => {
      if(!userEmail) return;
      setNickname('임시닉네임');
      setProfileImage('https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b');

    }, [userEmail]);


    return(
      <div id='user-top-wrapper'>
        <div className='user-top-container'>
          {isMyPage ?
          <div className='user-top-my-profile-image-box'>
            {profileImage !== null ?
            <div className='user-top-profile-image' style={{backgroundImage: `url(${profileImage})`}}></div> :
            <div className='user-top-my-profile-image-nothing-box'>
              <div className='icon-box-large'>
                <div className='icon image-box-white-icon'></div>
              </div>
            </div>
            }
            
            <input ref={imageInputRef} type='file' accept='image/*' style={{display:'none'}}/>
          </div> :
          <div className='user-top-profile-image-box' style={{backgroundImage: `url(${profileImage ? profileImage : DefaultProfileImage})`}}></div>
          }
          
          <div className='user-top-info-box'>
            <div className='user-top-info-nickname-box'>
              {isMyPage ?
              <>
              {isNicknameChange ?
                <input className='user-top-info-nickname-input' type='text' size={changeNickname.length + 1} value={changeNickname} /> :
                <div className='user-top-info-nickname'>{nickname}</div>
              }
              
              <div className='icon-button'>
                <div className='icon edit-icon'></div>
              </div>
              
              </> :
                <div className='user-top-info-nickname'>{nickname}</div>
              }
              
            </div>
            <div className='user-top-info-email'>{'임시 이메일'}</div>
          </div>
        </div>
      </div>
    );
  };

  const UserBottom = () => {
    return(
      <div></div>
    );
  };


  return (
    <>
    <UserTop/>
    <UserBottom/>
    </>
  )
}
