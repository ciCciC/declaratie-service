package com.declaratie.declaratieapi.model;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;

import java.util.Arrays;
import java.util.Objects;

public class DeclarationFileModel {

    private Long id;
    private String filetype;
    private byte[] file;
    private Declaration declaration;

    public DeclarationFileModel() {
    }

    public DeclarationFileModel(DeclarationFile declarationFile) {
        this.id = declarationFile.getId();
        this.filetype = declarationFile.getFiletype().name();
        this.file = declarationFile.getFile();
        this.declaration = declarationFile.getDeclaration_id();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFiletype() {
        return filetype;
    }

    public void setFiletype(String filetype) {
        this.filetype = filetype;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeclarationFileModel that = (DeclarationFileModel) o;
        return id.equals(that.id) &&
                filetype.equals(that.filetype) &&
                Arrays.equals(file, that.file) &&
                declaration.equals(that.declaration);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, filetype, declaration);
        result = 31 * result + Arrays.hashCode(file);
        return result;
    }

    @Override
    public String toString() {
        return "DeclarationFileModel{" +
                "id=" + id +
                ", filetype='" + filetype + '\'' +
                ", file=" + Arrays.toString(file) +
                ", declaration=" + declaration +
                '}';
    }
}
