package com.declaratie.declaratieapi.resourceManager;

public class ResourceManager {

    public static String getCurrentThreatResource(){
        return Thread.currentThread().getContextClassLoader().getResource("").getPath();
    }

    public static String getCurrentThreatResource(String concatFile){
        return Thread.currentThread().getContextClassLoader().getResource("").getPath() + concatFile;
    }

    public static String getHarcodedGetPath(){
        return "/Users/koray/Desktop/GAME/declaratie-service/declaratie-api/target/classes/application.properties";

    }
}
