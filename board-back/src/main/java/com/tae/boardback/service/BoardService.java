package com.tae.boardback.service;

import org.springframework.http.ResponseEntity;

import com.tae.boardback.dto.request.board.PostBoardRequestDto;
import com.tae.boardback.dto.response.board.GetBoardResponseDto;
import com.tae.boardback.dto.response.board.PostBoardResponseDto;
import com.tae.boardback.dto.response.board.PutFavoriteResponseDto;

public interface BoardService {
    ResponseEntity<? super GetBoardResponseDto> getBoard(Integer baordNumber);
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
    ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber, String email);
}
