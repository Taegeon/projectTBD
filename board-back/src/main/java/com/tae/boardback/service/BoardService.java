package com.tae.boardback.service;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;

import com.tae.boardback.dto.request.board.PatchBoardRequestDto;
import com.tae.boardback.dto.request.board.PostBoardRequestDto;
import com.tae.boardback.dto.request.board.PostCommentRequestDto;
import com.tae.boardback.dto.response.board.GetBoardResponseDto;
import com.tae.boardback.dto.response.board.PostBoardResponseDto;
import com.tae.boardback.dto.response.board.PutFavoriteResponseDto;
import com.tae.boardback.dto.response.board.GetFavoriteListResponseDto;
import com.tae.boardback.dto.response.board.PostCommentResponseDto;
import com.tae.boardback.dto.response.board.GetCommentListResponseDto;
import com.tae.boardback.dto.response.board.IncreaseViewCountResponseDto;
import com.tae.boardback.dto.response.board.DeleteBoardResponseDto;
import com.tae.boardback.dto.response.board.PatchBoardResponseDto;
import com.tae.boardback.dto.response.board.GetLatestBoardListResponseDto;
import com.tae.boardback.dto.response.board.GetTop3BoardListResponseDto;
import com.tae.boardback.dto.response.board.GetSearchBoardListResponseDto;




public interface BoardService {
    ResponseEntity<? super GetBoardResponseDto> getBoard(Integer baordNumber);
    ResponseEntity<? super GetFavoriteListResponseDto> getFavoriteList(Integer boardNumber);
    ResponseEntity<? super GetCommentListResponseDto> getCommentList(Integer boardInteger);
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
    ResponseEntity<? super PostCommentResponseDto> postComment(PostCommentRequestDto dto, Integer boardNumber, String email);
    ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber, String email);
    ResponseEntity<? super IncreaseViewCountResponseDto> increaseViewCount(Integer boardNumber);
    ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Integer boardNumber, String email);
    ResponseEntity<? super PatchBoardResponseDto> patchBoard(PatchBoardRequestDto dto, Integer boardNumber, String email);
    ResponseEntity<? super GetLatestBoardListResponseDto> getLatestBoardList();
    ResponseEntity<? super GetTop3BoardListResponseDto> getTop3BoardList();
    ResponseEntity<? super GetSearchBoardListResponseDto> getSearchBoardList(String searchWord, String preSearchWord);
}
