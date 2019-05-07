package com.declaratie.declaratieapi.util;

import com.declaratie.declaratieapi.enums.StateEnum;

public class StateUtils {

    public static boolean empIsAllowed(StateEnum stateToCompare) { return stateToCompare == StateEnum.SUBMITTED || stateToCompare == StateEnum.REJECTED; }
    public static boolean manIsAllowed(StateEnum stateToCompare) { return stateToCompare == StateEnum.INPROGRESS || stateToCompare == StateEnum.SUBMITTED; }
    public static boolean manIsAllowedToDelete(StateEnum stateToCompare) { return stateToCompare == StateEnum.INPROGRESS || stateToCompare == StateEnum.SUBMITTED || stateToCompare == StateEnum.REJECTED; }

    private StateUtils(){
    }
}
