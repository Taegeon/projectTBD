import { latestBoardListMock } from 'mocks';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BoardListItem } from 'types/interface';
import './style.css'
import BoardItem from 'components/BoardList'
import { SEARCH_PATH } from 'constant';

export default function Search() {

  const { searchWord } = useParams();
  const [count, setCount] = useState<number>(0);
  const [searchBoardList, setSearchBoardList] = useState<BoardListItem[]>([]);
  const [relationList, setRelationList] = useState<string[]>([]);

  const navigate = useNavigate();


  const onRelationWordClickHandler = (word: string) => {
    navigate(SEARCH_PATH(word));
  }

  useEffect(() => {
    setSearchBoardList(latestBoardListMock)
    setRelationList(['안녕', '테스트'])
  }, [searchWord]);


  if (!searchWord) return (<></>)
  return (
    <div id='search-wrapper'>
      <div className='search-container'>
        <div className='search-title-box'>
          <div className='search-title'><span className='emphasis'> {searchWord}</span>{'에 대한 검색결과 입니다.'}</div>
          <div className='search-count'>{count}</div>
        </div>
        <div className='search-contents-box'>
          {count === 0?
          <div className='search-contents-nothing'> {'검색 결과가 없습니다.'}</div> :
            <div className='search-contents'>
            {searchBoardList.map(boardListItem => <BoardItem boardListItem={boardListItem} />)}
            </div>
          }
          
          <div className='search-relation-box'>
            <div className='search-relation-card'>
              <div className='search-relation-card-container'>
                <div className='search-relation-card-title'>{'관련 검색어'}</div>

                {relationList.length === 0 ? 
                  <div className='search-relation-card-contents-nothing'>{'관련 검색어가 없습니다.'}</div> :
                  <div className='search-relation-card-contents'>
                  
                  {relationList.map(word => <div className='word-badge' onClick={() => onRelationWordClickHandler(word)}>{word}</div>)}


                  </div>
                }

              </div>
            </div>
          </div>
        </div>
        <div className='search-pagination-box'>
        </div>
      </div>
    </div>
  )
}
