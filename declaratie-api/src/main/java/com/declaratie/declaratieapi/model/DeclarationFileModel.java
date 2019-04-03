package com.declaratie.declaratieapi.model;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;

import java.util.Arrays;
import java.util.Objects;

public class DeclarationFileModel {

    private Long id;
    private String filename;
    private byte[] file;

    public DeclarationFileModel() {
    }

    public DeclarationFileModel(DeclarationFile declarationFile) {
        this.id = declarationFile.getId();
        this.filename = declarationFile.getFilename();
        this.file = declarationFile.getFile();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filetype) {
        this.filename = filetype;
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
                filename.equals(that.filename) &&
                Arrays.equals(file, that.file);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, filename);
        result = 31 * result + Arrays.hashCode(file);
        return result;
    }

    @Override
    public String toString() {
        return "DeclarationFileModel{" +
                "id=" + id +
                ", filename='" + filename + '\'' +
                ", file=" + Arrays.toString(file) +
                '}';
    }
}
