package com.tae.boardback.dto.response.auth;

import java.net.http.HttpResponse.ResponseInfo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.tae.boardback.common.responseCode;
import com.tae.boardback.common.responseMessage;
import com.tae.boardback.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class SignUpResponseDto extends ResponseDto {

    private SignUpResponseDto() {
        super(responseCode.SUCCESS, responseMessage.SUCCESS);
    }

    public static ResponseEntity<SignUpResponseDto> success() {
        SignUpResponseDto result = new SignUpResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> duplicateEmail() {
        ResponseDto result = new ResponseDto(responseCode.DUPLICATE_EMAIL, responseMessage.DUPLICATE_EMAIL);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    public static ResponseEntity<ResponseDto> duplicateNickname() {
        ResponseDto result = new ResponseDto(responseCode.DUPLICATE_NICKNAME, responseMessage.DUPLICATE_NICKNAME);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    public static ResponseEntity<ResponseDto> duplicateTelNumber() {
        ResponseDto result = new ResponseDto(responseCode.DUPLICATE_TEL_NUMBER, responseMessage.DUPLICATE_TEL_NUMBER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }
    
}
