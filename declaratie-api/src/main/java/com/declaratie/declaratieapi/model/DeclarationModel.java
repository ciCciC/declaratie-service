package com.declaratie.declaratieapi.model;

import java.util.Date;

public class DeclarationModel {

    private Long id;
    private String description;
    private Date date;
    private double amount;
    private String emp_comment;
    private String man_comment;
    private String status;
    private long emp_id;

    public DeclarationModel() {
        this.id = 0L;
        this.description = "";
        this.date = new Date();
        this.amount = 0;
        this.emp_comment = "";
        this.man_comment = "";
        this.status = "";
        this.emp_id = 0;
    }

    public DeclarationModel(Long id, String description, Date date, double amount, String emp_comment, String man_comment, String status, long emp_id) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.amount = amount;
        this.emp_comment = emp_comment;
        this.man_comment = man_comment;
        this.status = status;
        this.emp_id = emp_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getEmp_comment() {
        return emp_comment;
    }

    public void setEmp_comment(String emp_comment) {
        this.emp_comment = emp_comment;
    }

    public String getMan_comment() {
        return man_comment;
    }

    public void setMan_comment(String man_comment) {
        this.man_comment = man_comment;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public long getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(long emp_id) {
        this.emp_id = emp_id;
    }

    @Override
    public String toString() {
        return "DeclarationModel{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", amount=" + amount +
                ", emp_comment='" + emp_comment + '\'' +
                ", man_comment='" + man_comment + '\'' +
                ", status=" + status +
                ", emp_id=" + emp_id +
                '}';
    }
}
