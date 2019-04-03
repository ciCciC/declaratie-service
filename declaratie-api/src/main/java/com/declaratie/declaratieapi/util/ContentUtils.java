package com.declaratie.declaratieapi.util;

import com.declaratie.declaratieapi.model.DeclarationModel;

public class ContentUtils {

    public static void CLEAN_DELCARATION_VALUES(DeclarationModel model){
        model.setDescription(REPLACE_XSS_CHARS(model.getDescription()));

        if(model.getEmpComment() != null)
            model.setEmpComment(REPLACE_XSS_CHARS(model.getEmpComment()));

        if(model.getManComment() != null)
            model.setManComment(REPLACE_XSS_CHARS(model.getManComment()));

        model.setStatus(REPLACE_XSS_CHARS(model.getStatus()));
    }

    private static String REPLACE_XSS_CHARS(String value){
        value = value.replaceAll("eval\\((.*)\\)", "");
        value = value.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']", "\"\"");
        value = value.replaceAll("(?i)<script.*?>.*?<script.*?>", "");
        value = value.replaceAll("(?i)<script.*?>.*?</script.*?>", "");
        value = value.replaceAll("(?i)<.*?javascript:.*?>.*?</.*?>", "");
        value = value.replaceAll("(?i)<.*?\\s+on.*?>.*?</.*?>", "");
        return value;
    }
}
