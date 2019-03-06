package com.declaratie.declaratieapi.copyManager;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StatusEnum;
import com.declaratie.declaratieapi.model.DeclarationModel;

public class CopyDeclaration {

    public static Declaration declarationModel_To_declaration(DeclarationModel from){
        return new Declaration(from.getDescription(), from.getDate(), from.getAmount(), from.getEmp_comment(), from.getMan_comment(),
                StatusEnum.valueOf(from.getStatus()), from.getEmp_id());
    }

    public static DeclarationModel declaration_To_declarationModel(Declaration from){
        return new DeclarationModel(
                from.getId(),
                from.getDescription(),
                from.getDate(),
                from.getAmount(),
                from.getEmp_comment(),
                from.getMan_comment(),
                from.getStatusEnum().toString(),
                from.getEmp_id());
    }
}
