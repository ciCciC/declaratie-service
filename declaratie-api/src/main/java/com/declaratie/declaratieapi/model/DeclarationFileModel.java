package com.declaratie.declaratieapi.model;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.enums.FileTypeEnum;

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

    public DeclarationFile toDeclarationFile(){
        return new DeclarationFile(
                FileTypeEnum.valueOf(this.filetype),
                this.file,
                this.declaration);
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
}
