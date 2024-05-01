package com.tae.boardback.dto.response.board;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.tae.boardback.common.responseCode;
import com.tae.boardback.common.responseMessage;
import com.tae.boardback.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class DeleteBoardResponseDto extends ResponseDto {
    private DeleteBoardResponseDto() {
        super(responseCode.SUCCESS, responseMessage.SUCCESS);
    }

    public static ResponseEntity<DeleteBoardResponseDto> success(){
        DeleteBoardResponseDto result = new DeleteBoardResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }


}
