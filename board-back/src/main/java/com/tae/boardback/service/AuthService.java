package com.tae.boardback.service;

import org.springframework.http.ResponseEntity;

import com.tae.boardback.dto.request.auth.SignInRequestDto;
import com.tae.boardback.dto.response.auth.SignInResponseDto;
import com.tae.boardback.dto.request.auth.SignUpRequestDto;
import com.tae.boardback.dto.response.auth.SignUpResponseDto;
public interface AuthService {
    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);
    
}
