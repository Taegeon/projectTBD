package com.tae.boardback.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
//I made typo that searh_log should be search_log
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="searh_log")
@Table(name="searh_log")
public class SearchLogEntity {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int sequence;
    private String searchWord;
    private String relationWord;
    private boolean relation;

    public SearchLogEntity(String searchWord, String relationWord, boolean relation) {
        this.searchWord = searchWord;
        this.relationWord = relationWord;
        this.relation = relation;
    }
}
