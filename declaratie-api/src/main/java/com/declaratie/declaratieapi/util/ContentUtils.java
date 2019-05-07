package com.declaratie.declaratieapi.util;

import com.declaratie.declaratieapi.model.DeclarationFileModel;
import com.declaratie.declaratieapi.model.DeclarationModel;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class ContentUtils {

    private static final Long DIVIDER = 1000000L;
    private static final int MAXFILESIZE = 10;

    private ContentUtils(){
    }

    public static void cleanDelcarationValues(DeclarationModel model){
        if(model.getDescription() != null)
            model.setDescription(replaceXssChars(model.getDescription()));

        if(model.getEmpComment() != null)
            model.setEmpComment(replaceXssChars(model.getEmpComment()));

        if(model.getManComment() != null)
            model.setManComment(replaceXssChars(model.getManComment()));

        model.setStatus(replaceXssChars(model.getStatus()));
    }

    public static String cleanFilename(String filename) {
        return replaceXssChars(filename);
    }

    public static void transformMultiPart(MultipartFile[] declarationfiles, DeclarationModel declarationModel) throws IOException {
        String splitter [] = null;
        DeclarationFileModel tmp = null;

        for (MultipartFile fileModel: declarationfiles) {
            tmp = new DeclarationFileModel();

            if(convertByteToMb(fileModel.getSize()) <= MAXFILESIZE) {
                splitter = fileModel.getOriginalFilename().split("#");

                if(!splitter[splitter.length-1].equals("noid")){
                    tmp.setId(Long.parseLong(splitter[splitter.length-1]));
                }
                tmp.setFile(fileModel.getBytes());
                tmp.setFilename(cleanFilename(splitter[0]));
                declarationModel.addFile(tmp);
            }
        }
    }

    private static Long convertByteToMb(Long byteSize) {
        return byteSize / DIVIDER;
    }

    private static String replaceXssChars(String value){
        value = value.replaceAll("eval\\((.*)\\)", "");
        value = value.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']", "\"\"");
        value = value.replaceAll("(?i)<script.*?>.*?<script.*?>", "");
        value = value.replaceAll("(?i)<script.*?>.*?</script.*?>", "");
        value = value.replaceAll("(?i)<.*?javascript:.*?>.*?</.*?>", "");
        value = value.replaceAll("(?i)<.*?\\s+on.*?>.*?</.*?>", "");
        return value;
    }
}
