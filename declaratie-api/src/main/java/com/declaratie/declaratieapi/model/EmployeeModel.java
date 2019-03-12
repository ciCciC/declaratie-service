package com.declaratie.declaratieapi.model;

import java.util.ArrayList;
import java.util.List;

public class EmployeeModel {

    private long id;
    private String fname;
    private String lname;
    private String bankAccountNumber;
    private String role;
    private List<DeclarationModel> declarationModels;

    /***
     *
     */
    public EmployeeModel(){
    }

    /***
     * Constructor overloading
     * @param id employee id
     * @param fname firstname employee
     * @param lname lastname employee
     * @param bankAccountNumber bankAccountNumber of employee
     * @param role manager or employee
     */
    public EmployeeModel(long id, String fname, String lname, String bankAccountNumber, String role) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.bankAccountNumber = bankAccountNumber;
        this.role = role;
    }

    /***
     * Gets the Id
     * @return Long this returns the Id of the employee
     */
    public long getId() {
        return id;
    }

    /***
     * Sets the Id
     * @param id for setting employee id
     */
    public void setId(long id) {
        this.id = id;
    }

    /***
     * Gets the firstname
     * @return String returns the firstname
     */
    public String getFname() {
        return fname;
    }

    /***
     * Sets the firstname
     * @param fname for setting the firstname
     */
    public void setFname(String fname) {
        this.fname = fname;
    }

    /***
     * Gets the lastname
     * @return String for getting the lastname
     */
    public String getLname() {
        return lname;
    }

    /***
     * Sets the lastname
     * @param lname for setting the lastname
     */
    public void setLname(String lname) {
        this.lname = lname;
    }

    /***
     * Gets the bankaccountnumber
     * @return String for getting the bankaccountnumber
     */
    public String getBankAccountNumber() {
        return bankAccountNumber;
    }

    /***
     * Sets the bankaccountnumber
     * @param bankAccountNumber for setting the bankaccountnumber
     */
    public void setBankAccountNumber(String bankAccountNumber) {
        this.bankAccountNumber = bankAccountNumber;
    }

    /***
     * Gets the employee function
     * @return roleEnum for getting the employee function
     */
    public String getRole() {
        return this.role;
    }

    /***
     * Sets the employee function
     * @param role for setting the employee function
     */
    public void setRole(String role) {
        this.role = role;
    }

    public void addDeclarationModel(DeclarationModel declarationModel){
        if(!this.declarationModels.contains(declarationModel)){
            this.declarationModels.add(declarationModel);
        }
    }

    public List<DeclarationModel> getDeclarationModels() {
        return declarationModels;
    }

    public void setDeclarationModels(ArrayList<DeclarationModel> declarationModels) {
        this.declarationModels = declarationModels;
    }

    @Override
    public String toString() {
        return "EmployeeModel{" +
                "id=" + id +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", bankAccountNumber='" + bankAccountNumber + '\'' +
                ", role=" + role +
                '}';
    }
}
