package com.tae.boardback.dto.object;

import java.util.ArrayList;
import java.util.List;

import com.tae.boardback.entity.BoardListViewEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor

public class boardListItem {
    private int boardNumber;
    private String title;
    private String content;
    private String boardTitleImage;
    private int favoriteCount;
    private int commentCount;
    private int viewCount;
    private String writeDatetime;
    private String writeNickname;
    private String writeProfileImage;

    public boardListItem(BoardListViewEntity boardListViewEntity) {
        this.boardNumber = boardListViewEntity.getBoardNumber();
        this.title = boardListViewEntity.getTitle();
        this.content = boardListViewEntity.getContent();
        this.boardTitleImage = boardListViewEntity.getTitleImage();
        this.favoriteCount = boardListViewEntity.getFavoriteCount();
        this.commentCount = boardListViewEntity.getCommentCount();
        this.viewCount = boardListViewEntity.getViewCount();
        this.writeDatetime = boardListViewEntity.getWriteDatetime();
        this.writeNickname = boardListViewEntity.getWriterNickname();
        this.writeProfileImage = boardListViewEntity.getWriterProfileImage();
    }

    public static List<boardListItem> getList(List<BoardListViewEntity> boardListViewEntities) {
        List<boardListItem> list = new ArrayList<>();
        for (BoardListViewEntity boardListViewEntity : boardListViewEntities) {
            boardListItem boardListItem = new boardListItem(boardListViewEntity);
            list.add(boardListItem);
        }

        return list;
    }
}
