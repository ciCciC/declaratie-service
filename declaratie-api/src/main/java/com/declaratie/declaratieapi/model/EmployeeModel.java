package com.declaratie.declaratieapi.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class EmployeeModel {

    private long id;
    private String fname;
    private String lname;
    private String role;
    private long managerId;

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
     * @param role manager or employee
     */
    public EmployeeModel(long id, String fname, String lname, String role) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
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

    public long getManagerId() {
        return managerId;
    }

    public void setManagerId(long managerId) {
        this.managerId = managerId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmployeeModel that = (EmployeeModel) o;
        return id == that.id &&
                fname.equals(that.fname) &&
                lname.equals(that.lname) &&
                role.equals(that.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fname, lname, role);
    }

    @Override
    public String toString() {
        return "EmployeeModel{" +
                "id=" + id +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", role=" + role +
                '}';
    }
}
