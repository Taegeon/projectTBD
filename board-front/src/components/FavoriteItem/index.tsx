import React from 'react'
import { FavoriteListItem } from 'types/interface'
import defaultImage from 'assets/image/Default_pfp.png'
import './style.css'

interface Props {
    favoriteListItem: FavoriteListItem;
}

export default function FavoriteItem({favoriteListItem} : Props) {

    const {profileImage, nickname} = favoriteListItem;


  return (
    <div className='favorite-list-item'>
        <div className='favorite-list-item-profile-box'>
            <div className='favorite-list-item-profile-image' style= {{backgroundImage : `url(${profileImage? profileImage : defaultImage })`}}></div>

        </div>
        <div className='favorite-list-item-nickname'> {nickname} </div>
    </div>
  )
}
