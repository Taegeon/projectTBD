import FavoriteItem from 'components/FavoriteItem'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './style.css'
import { Board, CommentListItem, FavoriteListItem } from 'types/interface'
import { boardMock, commentListMock, favoriteListMock } from 'mocks'
import CommentItem from 'components/CommentItem'
import Pagination from 'components/Pagination'
import defaultProfileImage from 'assets/image/Default_pfp.png'
import { useLoginUserStore } from 'stores'
import { useNavigate, useParams } from 'react-router-dom'
import { BOARD_PATH, BOARD_UPDATE_PATH, MAIN_PATH, USER_PATH } from 'constant'
import { getBoardRequest, increaseViewCountRequest } from 'apis'
import { ResponseDto } from 'apis/response'
import GetBoardResponseDto from 'apis/response/board/get-board.response.dto'
import { IncreaseViewCountResponseDto } from 'apis/response/board'

export default function BoardDetail() {

  const { boardNumber } = useParams();
  const { loginUser } = useLoginUserStore();

  const navigator = useNavigate();

  const increaseViewCountResponse = (responseBody: IncreaseViewCountResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody;
    if (code==='NB') alert('존재하지 않는 게시물입니다.');
    if (code==='DBE') alert('데이터베이스 오류입니다.');
  }

  const BoardDetailTop = () => {

    const [isWriter, setWriter] = useState<boolean>(false);
    const [board, setBoard] = useState<Board | null>(null);
    const [showMore, setShowMore] = useState<boolean>(false);

    const getBoardResponse = (responseBody: GetBoardResponseDto | ResponseDto | null) => {
      if (!responseBody) return;
      const { code } = responseBody;
      if (code === 'NB') alert('존재하지 않는 게시물입니다.');
      if (code ==='DBE') alert('데이터베이스 오류입니다.');
      if (code !== 'SU') {
        navigator(MAIN_PATH());
        return;
      }
      const board: Board = {...responseBody as GetBoardResponseDto};
      setBoard(board);

      if (!loginUser) {
        setWriter(false);
        return;
      }

      const isWriter = loginUser.email === board.writerEmail;
      setWriter(isWriter);
    }    


    const onNicknameClickHandler = () => {
      if (!board) return;
      navigator(USER_PATH(board.writerEmail));
    }

    const onMoreButtonClickHandler = () => {
      setShowMore(!showMore);
    }

    const onUpadteButtonClickHandler = () => {
      if(!board || !loginUser) return;
      if(loginUser.email !== board.writerEmail) return;
      navigator(BOARD_PATH() + '/' + BOARD_UPDATE_PATH(board.boardNumber));
    }

    const onDeleteButtonClickHandler = () => {
      if(!board || !loginUser) return;
      if(loginUser.email !== board.writerEmail) return;

      //TODO
      navigator(MAIN_PATH());
    }


    useEffect(() => {
      if (!boardNumber) {
        navigator(MAIN_PATH());
        return;
      }
      getBoardRequest(boardNumber).then(getBoardResponse);

    }, [boardNumber]);

   if (!board) return <></>


    return (
      <div id='board-detail-top'>
        <div className='board-detail-top-header'>
          <div className='board-detail-title'>{board.title}</div>
          <div className='board-detail-top-sub-box'>
            <div className='board-detail-write-info-box'>
              <div className='board-detail-writer-profile-image' style={{backgroundImage: `url(${board?.writerProfileImage ? board.writerProfileImage : defaultProfileImage})`}}></div>
              <div className='board-detail-writer-nickname' onClick={onNicknameClickHandler}>{board.writerNickname}</div>
              <div className='board-detail-info-divider'>{'\|'}</div>
              <div className='board-detail-write-date'>{board.writeDatetime}</div>
            </div>
            {isWriter &&
            <div className='icon-button' onClick={onMoreButtonClickHandler}>
            <div className='icon more-icon'></div>
          </div>
            }
            
            {showMore && 
            <div className='board-detail-more-box'>
              <div className='board-detail-update-button' onClick={onUpadteButtonClickHandler} >{'수정'}</div>
              <div className='divider'></div>
              <div className='board-detail-delete-button' onClick={onDeleteButtonClickHandler}>{'삭제'}</div>
            </div>
           }
           

          </div>

        </div>
        <div className='divider'></div>
        <div className='board-detail-top-main'>
          <div className='board-detail-main-text'>{board.content}</div>
          {board.boardImageList.map(image => <img className='board-detail-main-image' src={image} />)}
          <img className='board-detail-main-image' src='' />
        </div>


      </div>


    )
  }

  const BoardDetailBottom = () => {

    const commentRef = useRef<HTMLTextAreaElement | null>(null);


    const [favoriteList, setFavoriteList] = useState<FavoriteListItem[]>([]);
    const [commentList, setCommentList] = useState<CommentListItem[]>([]);
    const [isFavorite, setFavorite] = useState<boolean>(false);

    const [showFavorite, setShowFavorite] = useState<boolean>(false);
    const [showComment, setShowComment] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('');



    const onFavoriteClickHandler = () => {
      setFavorite(!isFavorite);
    }

    const onShowFavoriteClickHandler = () => {
      setShowFavorite(!showFavorite);
    }

    const onShowCommentClickHandler = () => {
      setShowComment(!showComment);
    }

    const onCommentSubmitButtonClickHandler = () => {
      if (!comment) return;
    }



    const onCommentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;
      setComment(value);

      if(!commentRef.current) return;
      commentRef.current.style.height = 'auto';
      commentRef.current.style.height = `${commentRef.current.scrollHeight}px`;


    }


    useEffect(() => {
      setFavoriteList(favoriteListMock);
      setCommentList(commentListMock);
    }, [boardNumber]);


    return (
      <div id='board-detail-bottom'>
        <div className='board-detail-bottom-button-box'>
          <div className='board-detail-bottom-button-group'>
            <div className='icon-button' onClick={onFavoriteClickHandler}>
              {isFavorite ?
              <div className='icon favorite-fill-icon'></div> :
              <div className='icon favorite-light-icon'></div>
              }
            </div>
            <div className='board-detail-bottom-button-text'>{`좋아요 ${favoriteList.length}`}</div>
            <div className='icon-button' onClick = {onShowFavoriteClickHandler}>
              {showFavorite ?
                  <div className='icon up-light-icon'></div> :
                  <div className='icon down-light-icon'></div>
              }
              
            </div>
          </div>
          <div className='board-detail-bottom-button-group'>
            <div className='icon-button'>
              <div className='icon comment-icon'></div>
            </div>
            <div className='board-detail-bottom-button-text'>{`댓글 ${commentList.length}`}</div>
            <div className='icon-button' onClick={onShowCommentClickHandler}>
              {showComment ?
                  <div className='icon up-light-icon'></div> :
                  <div className='icon down-light-icon'></div>
              }
              
            </div>
          </div>
        </div>

        {showFavorite &&
        <div className='board-detail-bottom-favorite-box'>
          <div className='board-detail-bottom-favorite-container'>
            <div className='board-detail-bottom-favorite-title'>{'좋아요'} <span className='emphasis'>{favoriteList.length}</span></div>
            <div className='board-detail-bottom-favorite-contents'>
              {favoriteList.map(item => <FavoriteItem favoriteListItem={item} />)}
      
            </div>
          </div>
        </div>
        }

        {showComment && 
        <div className='board-detail-bottom-comment-box'>
        <div className='board-detail-bottom-comment-container'>
          <div className='board-detail-bottom-comment-title'>{'댓글'}<span className='emphasis'>{commentList.length}</span></div>
          <div className='board-detail-bottom-comment-list-container'>
            {commentList.map(item => <CommentItem commentListItem={item}/>)}
          </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-bottom-comment-pagination-box'>
          <Pagination/>

        </div>
        <div className='board-detail-bottom-comment-input-box'>
          <div className='board-detail-bottom-comment-input-container'>
            <textarea ref={commentRef} className='board-detail-bottom-comment-textarea' placeholder='댓글을 작성해주세요.' value = {comment} onChange={onCommentChangeHandler} />
            <div className='board-detail-bottom-comment-button-box'>
              <div className= {comment === ''? 'disable-button' : 'black-button' } onClick={onCommentSubmitButtonClickHandler}>{'댓글달기'}</div>
            </div>
          </div>
        </div>
      </div>
      }
        
      </div>


    )
  }

  let effectFlag = true;
  useEffect(() => {
    if (!boardNumber) return;
    if (effectFlag) {
      effectFlag = false;
      return;
    }
    increaseViewCountRequest(boardNumber).then(increaseViewCountResponse);
  }, [boardNumber])

  return (
    <div id='board-detail-wrapper'>
      <div className='board-detail-container'>
        <BoardDetailTop/>
        <BoardDetailBottom/>

      </div>
    </div>
  )
}
