package com.tae.boardback.dto.response.board;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.tae.boardback.common.responseCode;
import com.tae.boardback.common.responseMessage;
import com.tae.boardback.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class PostCommentResponseDto extends ResponseDto{
    private PostCommentResponseDto() {
        super(responseCode.SUCCESS, responseMessage.SUCCESS);
    }

    public static ResponseEntity<PostCommentResponseDto> success() {
        PostCommentResponseDto result = new PostCommentResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> noExistBoard() {
        ResponseDto result = new ResponseDto(responseCode.NOT_EXSITED_BOARD, responseMessage.NOT_EXSITED_BOARD);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    public static ResponseEntity<ResponseDto> noExistUser() {
        ResponseDto result = new ResponseDto(responseCode.NOT_EXISTED_USER, responseMessage.NOT_EXISTED_USER);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }


}
