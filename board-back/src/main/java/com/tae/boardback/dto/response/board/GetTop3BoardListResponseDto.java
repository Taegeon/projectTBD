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
public class GetTop3BoardListResponseDto extends ResponseDto{
    private List<boardListItem> top3List;

    private GetTop3BoardListResponseDto(List<BoardListViewEntity> boardListViewEntities) {
        super(responseCode.SUCCESS, responseMessage.SUCCESS);
        this.top3List = boardListItem.getList(boardListViewEntities);
    }


    public static ResponseEntity<GetTop3BoardListResponseDto> success(List<BoardListViewEntity> boardListViewEntities) {
        GetTop3BoardListResponseDto result = new GetTop3BoardListResponseDto(boardListViewEntities);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    
}
