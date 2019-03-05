package com.declaratie.declaratieapi.model;

public class EmployeeModel {

    private Long id;
    private String fname;
    private String lname;
    private String type;
    private String bankAccountNumber;
    private EmployeeModel manager;

    /***
     * The manager might not exist in manager
     */
    public EmployeeModel(){

    }

    /***
     * Constructor overloading
     * @param id employee id
     * @param fname firstname employee
     * @param lname lastname employee
     * @param type type of employee
     * @param bankAccountNumber bankAccountNumber of employee
     * @param manager the manager of employee
     */
    public EmployeeModel(Long id, String fname, String lname, String type, String bankAccountNumber, EmployeeModel manager) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.type = type;
        this.bankAccountNumber = bankAccountNumber;
        this.manager = manager;
    }

    /***
     * Gets the Id
     * @return Long this returns the Id of the employee
     */
    public Long getId() {
        return id;
    }

    /***
     * Sets the Id
     * @param id for setting employee id
     */
    public void setId(Long id) {
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
     * Gets the type
     * @return String for getting the type
     */
    public String getType() {
        return type;
    }

    /***
     * Sets the type
     * @param type for setting the type
     */
    public void setType(String type) {
        this.type = type;
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
     * Gets the Manager
     * @return EmployeeModel for getting the Manager
     */
    public EmployeeModel getManager() {
        return manager;
    }

    /***
     * Sets the Manager
     * @param manager for setting the Manager
     */
    public void setManager(EmployeeModel manager) {
        this.manager = manager;
    }

    @Override
    public String toString() {
        return "EmployeeModel{" +
                "id=" + id +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", type='" + type + '\'' +
                ", bankAccountNumber='" + bankAccountNumber + '\'' +
                ", manager=" + manager +
                '}';
    }
}
