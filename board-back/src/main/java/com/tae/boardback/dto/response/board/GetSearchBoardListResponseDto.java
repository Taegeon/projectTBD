package com.tae.boardback.dto.response.board;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.tae.boardback.common.responseCode;
import com.tae.boardback.common.responseMessage;
import com.tae.boardback.dto.object.boardListItem;
import com.tae.boardback.dto.response.ResponseDto;
import com.tae.boardback.entity.BoardListViewEntity;

import lombok.Getter;

@Getter
public class GetSearchBoardListResponseDto extends ResponseDto{
    private List<boardListItem> searchList;
    
    private GetSearchBoardListResponseDto(List<BoardListViewEntity> boardListViewEntities) {
        super(responseCode.SUCCESS, responseMessage.SUCCESS);
        this.searchList = boardListItem.getList(boardListViewEntities);
    }

    public static ResponseEntity<GetSearchBoardListResponseDto> success(List<BoardListViewEntity> boardListViewEntities) {
        GetSearchBoardListResponseDto result = new GetSearchBoardListResponseDto(boardListViewEntities);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }



}
