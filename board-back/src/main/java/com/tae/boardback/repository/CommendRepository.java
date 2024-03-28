package com.tae.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tae.boardback.entity.CommentEntity;

@Repository
public interface CommendRepository extends JpaRepository<CommentEntity, Integer> {
    
}
