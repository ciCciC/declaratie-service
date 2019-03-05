package com.declaratie.declaratieapi.CopyManager;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StatusEnum;
import com.declaratie.declaratieapi.model.DeclarationModel;

public class CopyDeclaration {

    public static Declaration declarationModel_To_declaration(DeclarationModel from){
        return new Declaration(from.getDescription(), from.getDate(), from.getAmount(), from.getEmp_comment(), from.getMan_comment(),
                StatusEnum.valueOf(from.getStatus()), from.getEmp_id());
    }
}
