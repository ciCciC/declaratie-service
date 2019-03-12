package com.declaratie.declaratieapi.dao;

import com.declaratie.declaratieapi.entity.DeclarationFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeclarationFileRepository extends JpaRepository<DeclarationFile, Long> {
}
