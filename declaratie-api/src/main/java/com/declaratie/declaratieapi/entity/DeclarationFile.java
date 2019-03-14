package com.declaratie.declaratieapi.entity;

import com.declaratie.declaratieapi.enums.FileTypeEnum;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Table(name="declarationfile",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"declaration_id", "file"})})
public class DeclarationFile {

    public DeclarationFile() {
    }

    public DeclarationFile(FileTypeEnum filetype, byte[] file) {
        this.filetype = filetype;
        this.file = file;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "declaration_id")
    private Declaration declaration;

    @Enumerated(EnumType.STRING)
    @Column(name = "filetype")
    private FileTypeEnum filetype;

    @Lob
    @Column(name = "file", nullable = false)
    private byte[] file;

    public Declaration getDeclaration_id() {
        return this.declaration;
    }

    public void setDeclaration_id(Declaration declaration_id) {
        this.declaration = declaration_id;
    }

    public FileTypeEnum getFiletype() {
        return filetype;
    }

    public void setFiletype(FileTypeEnum filetype) {
        this.filetype = filetype;
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
}
