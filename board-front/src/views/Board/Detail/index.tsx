import React from 'react'
import './style.css'

export default function BoardDetail() {

  const BoardDetailTop = () => {

    return (
      <div id='board-detail-top'>
        <div className='board-detail-top-header'>
          <div className='board-detail-title'>{'오늘 뭐먹지'}</div>
          <div className='board-detail-top-sub-box'>
            <div className='board-detail-write-info-box'>
              <div className='board-detail-writer-profile-image'></div>
              <div className='board-detail-writer-nickname'>{'닉네임'}</div>
              <div className='board-detail-info-divider'>{'\|'}</div>
              <div className='board-detail-write-date'>{'2024. 04. 23'}</div>
            </div>
            <div className='icon-button'>
              <div className='icon more-icon'></div>
            </div>
            <div className='board-detail-more-box'>
              <div className='board-detail-update-button'>{'수정'}</div>
              <div className='divider'></div>
              <div className='board-detail-delete-button'>{'삭제'}</div>
            </div>

          </div>

        </div>
        <div className='divider'></div>
        <div className='board-detail-top-main'>
          <div className='board-detail-main-text'>{'내용'}</div>
          <div className='board-detail-main-image'></div>
        </div>


      </div>


    )
  }

  const BoardDetailBottom = () => {
    return (<></>)

  }



  return (
    <div id='board-detail-wrapper'>
      <div className='board-detail-container'>
        <BoardDetailTop/>
        <BoardDetailBottom/>

      </div>
    </div>
  )
}
