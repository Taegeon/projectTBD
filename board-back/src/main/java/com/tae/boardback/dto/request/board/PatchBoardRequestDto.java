package com.tae.boardback.dto.request.board;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PatchBoardRequestDto {
    @NotBlank
    private String title;
    @NotBlank
    private String content;
    @NotBlank
    private List<String> boardImageList;
    
}
