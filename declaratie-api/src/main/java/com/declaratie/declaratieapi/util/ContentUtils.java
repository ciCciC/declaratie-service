package com.declaratie.declaratieapi.util;

import com.declaratie.declaratieapi.model.DeclarationModel;

public class ContentUtils {

    public static void CLEAN_DELCARATION_VALUES(DeclarationModel model){
        model.setDescription(REPLACE_XSS_CHARS(model.getDescription()));

        if(model.getEmp_comment() != null)
            model.setEmp_comment(REPLACE_XSS_CHARS(model.getEmp_comment()));

        if(model.getMan_comment() != null)
            model.setMan_comment(REPLACE_XSS_CHARS(model.getMan_comment()));

        model.setState(REPLACE_XSS_CHARS(model.getState()));

        System.out.println(model);
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
