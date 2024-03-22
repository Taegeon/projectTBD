import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BoardListItem } from 'types/interface'
import './style.css'
import DefaultProfileImage from 'assets/image/Default_pfp.png'

interface Props {
    boardListItem: BoardListItem
}


export default function BoardList({boardListItem}: Props) {
    // properties
    const { boardNumber, title, content, boardTitleImage} = boardListItem;
    const { favoriteCount, commentCOunt, viewCount} = boardListItem;
    const {writeDatetime, writeNickname, writerProfileImage} = boardListItem;

    //function: naviagte
    //const navigator = useNavigate();

    //event handler : clicking board item event handling
    const onClickHandler = () => {
        //navigator(boardNumber);
    }

    //
  return (
    <div className='board-list-item' onClick={onClickHandler}>
        <div className='board-list-item-main-box'>
            <div className='board-list-item-top'>
                <div className='board-list-item-profile-box'>
                    <div className='board-list-item-profile-image' style = {{ backgroundImage: `url(${writerProfileImage ? writerProfileImage : DefaultProfileImage})`}}></div>
                </div>
                <div className='board-list-item-write-box'>
                    <div className='board-list-item-nickname'> {writeNickname}</div>
                    <div className='board-list-item-write-date'>{writeDatetime}</div>
                </div>
            </div>   

            <div className='board-list-item-middle'>
                <div className='board-list-item-title'> {title}</div>
                <div className='board-list-item-content'> {content}</div>
            </div>
            <div className='board-list-item-bottom'>
                <div className='board-list-item-counts'>
                     {`comment ${commentCOunt} - likes - ${favoriteCount} views - ${viewCount}`}
                </div>
            </div>
            
            
        </div>
        {boardTitleImage !== null && (
            <div className='board-list-item-image-box'>
            <div className='board-list-item-image' style={{ background : `url(${boardTitleImage})`}}></div>  
         </div>
        )}
        
        
    </div>
  )
}
