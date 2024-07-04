package com.tae.boardback.service;

import org.springframework.http.ResponseEntity;

import com.tae.boardback.dto.request.user.PatchNicknameRequestDto;
import com.tae.boardback.dto.response.user.GetSignInUserResponseDto;
import com.tae.boardback.dto.response.user.GetUserResponseDto;
import com.tae.boardback.dto.response.user.PatchNicknameResponseDto;
import com.tae.boardback.dto.response.user.PatchProfileImageResponseDto;
import com.tae.boardback.dto.request.user.PatchProfileImageRequestDto;




public interface UserService {

    ResponseEntity<? super GetUserResponseDto> getUser(String email);
    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email);
    ResponseEntity<? super PatchNicknameResponseDto> patchNickname(PatchNicknameRequestDto dto, String email);
    ResponseEntity<? super PatchProfileImageResponseDto> patchProfileImage(PatchProfileImageRequestDto dto, String email);

}
