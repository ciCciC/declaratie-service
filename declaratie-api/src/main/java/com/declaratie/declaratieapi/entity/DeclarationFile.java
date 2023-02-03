package com.declaratie.declaratieapi.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Table
public class DeclarationFile {

    public DeclarationFile() {
    }

    public DeclarationFile(String fileName, byte[] file) {
        this.fileName = fileName;
        this.file = file;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "declaration_id")
    @NotNull
    private Declaration declaration;

    @Column
    private String fileName;

    @Column
    @NotNull
    @Lob
    private byte[] file;

    public Declaration getDeclarationId() {
        return this.declaration;
    }

    public void setDeclarationId(Declaration declarationId) {
        this.declaration = declarationId;
    }

    public String getFilename() {
        return fileName;
    }

    public void setFilename(String filetype) {
        this.fileName = filetype;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeclarationFile that = (DeclarationFile) o;
        return declaration.equals(that.declaration) &&
                Arrays.equals(file, that.file);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(declaration);
        result = 31 * result + Arrays.hashCode(file);
        return result;
    }

    @Override
    public String toString() {
        return "DeclarationFile{" +
                "id=" + id +
                ", fileName=" + fileName +
                '}';
    }
}
