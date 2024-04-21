package com.tae.boardback.dto.object;

import java.util.ArrayList;
import java.util.List;

import com.tae.boardback.repository.resultSet.GetFavoriteListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class favoriteListItem {
    private String email;
    private String nickname;
    private String profileImage;

    public favoriteListItem (GetFavoriteListResultSet resultSet) {
        this.email = resultSet.getEmail();
        this.nickname = resultSet.getNickname();
        this.profileImage = resultSet.getProfileImage();
    }

    public static List<favoriteListItem> copyList(List<GetFavoriteListResultSet> resultSets) {
        List<favoriteListItem> list = new ArrayList<>();
        for (GetFavoriteListResultSet resultSet: resultSets) {
            favoriteListItem favoriteListItem = new favoriteListItem(resultSet);
            list.add(favoriteListItem);
        }
        return list;
    }
}
