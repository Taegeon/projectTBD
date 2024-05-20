package com.tae.boardback.service;

import org.springframework.http.ResponseEntity;
import com.tae.boardback.dto.response.search.GetPopularListResponseDto;

public interface SearchService {
    ResponseEntity<? super GetPopularListResponseDto> getPopularList();
}
