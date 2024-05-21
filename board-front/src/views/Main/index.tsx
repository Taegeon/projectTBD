import Top3Item from 'components/Top3Item'
import BoardItem from 'components/BoardList'

import { latestBoardListMock, top3BoardListMock } from 'mocks';
import React, { useEffect, useState } from 'react'
import { BoardListItem } from 'types/interface';
import './style.css'

export default function Main() {

  // 메인화면 상단 컴포넌트
  const MainTop = () => {

    const [top3BoardList, setTop3BoardList] = useState<BoardListItem[]>([]);

    useEffect(() => {
      setTop3BoardList(top3BoardListMock);
    }, []);

    return (
      <div id='main-top-wrapper'>
        <div className='main-top-container'>
          <div className='main-top-intro'>{'인트로 페이지 입니다.'}</div>
          <div className='main-top-contents-box'>
            <div className='main-top-contents-title'>{'임시 타이틀 입니다.'}</div>
            <div className='main-top-contents'>
              {top3BoardList.map(top3BoardListItem => <Top3Item top3ListItem={top3BoardListItem}/>)}
            

            </div>
          </div>
        </div>
      </div>
    )
  }

  // 메인화면 하단 컴포넌트
  const MainBottom = () => {
    const [currentBoardList, setCurrentBoardList] = useState<BoardListItem[]>([]);
    const [popularWordList, setPopularWordList] = useState<string[]>([]);

    useEffect(() => {
      setCurrentBoardList(latestBoardListMock);
      setPopularWordList(['안녕', '잘가', '하이']);
    }, []);
    return (
      <div id='main-bottom-wrapper'>
        <div className='main-bottom-container'>
          <div className='main-bottom-title'>{'최신 게시물'}</div>
          <div className='main-bottom-contents--box'>
            <div className='main-bottom-current-contents'>
              {currentBoardList.map(boardListItem => <BoardItem boardListItem={boardListItem}/>)}
              
            </div>
            <div className='main-bottom-popular-box'>
              <div className='main-bottom-popular-card'>
                <div className='main-bottom-popular-card-box'>
                  <div className='main-bottom-popular-card-title'>{'인기 검색어'}</div>
                  <div className='main-bottom-popular-card-contents'>
                    {popularWordList.map(word => <div className='word-badge'>{word}</div>)}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='main-bottom-pagination-box'></div>
        </div>
      </div>
    )


  }

  return (
    <>
      <MainTop />
      <MainBottom />


    </>
  )
}
