package com.declaratie.declaratieapi.dao;

import com.declaratie.declaratieapi.entity.Declaration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeclarationRepository extends JpaRepository<Declaration, Long> {

    boolean existsById(Long id);
}