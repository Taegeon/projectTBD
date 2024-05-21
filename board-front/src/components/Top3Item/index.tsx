import React from 'react'
import './style.css';
import defaultProfileImage from 'assets/image/Default_pfp.png'
import { BoardListItem } from 'types/interface';
import { useNavigate } from 'react-router-dom';
import { BOARD_DETAIL_PATH, BOARD_PATH } from 'constant';

interface Props {
    top3ListItem: BoardListItem
}


export default function Top3Item({ top3ListItem }: Props) {


    const { boardNumber, title, content, boardTitleImage} = top3ListItem;
    const {favoriteCount, commentCOunt, viewCount} = top3ListItem
    const {writeDatetime, writeNickname, writerProfileImage} = top3ListItem

    const navigate = useNavigate();
    const onClickHandler = () => {
       navigate(BOARD_PATH() + '/' + BOARD_DETAIL_PATH(boardNumber));
    }



  return (
    <div className='top-3-list-item' style={{backgroundImage: `url(${boardTitleImage})`}} >
        <div className='top-3-list-item-main-box'>
            <div className='top-3-list-item-top'>
                <div className='top-3-list-item-profile-box'>
                    <div className='top-3-list-item-profile-image' style={{ backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImage})`}}></div>  
                </div>
                <div className='top-3-list-item-write-box'>
                    <div className='top-3-list-item-nickname'> {writeNickname} </div>      
                    <div className='top-3-list-item-write-date'> {writeDatetime} </div>  
                </div>  
            </div>
            <div className='top-3-list-item-middle'>
                <div className='top-3-list-item-title'> {title} </div>  
                <div className='top-3-list-item-content'> {content} </div>  
                
            </div>
            <div className='top-3-list-item-bottom'>
                <div className='top-3-list-item-counts'>  
                    {`comment ${commentCOunt} - likes - ${favoriteCount} views - ${viewCount}`}
                </div>  
                
            </div>


        </div>


    </div>
  )
}

