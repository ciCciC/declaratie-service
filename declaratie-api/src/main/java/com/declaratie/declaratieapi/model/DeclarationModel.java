package com.declaratie.declaratieapi.model;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;

import java.util.Date;
import java.util.List;
import java.util.Objects;

public class DeclarationModel {

    private Long id;
    private String description;
    private Date date;
    private double amount;
    private String emp_comment;
    private String man_comment;
    private String state;
    private Long emp_id;
    private List<DeclarationFileModel> files;

    public DeclarationModel() {
        this.id = 0L;
        this.description = "";
        this.date = new Date();
        this.amount = 0;
        this.emp_comment = "";
        this.man_comment = "";
        this.state = "";
        this.emp_id = 0L;
    }

    public DeclarationModel(Declaration declaration){
        this.id = declaration.getId();
        this.description = declaration.getDescription();
        this.date = declaration.getDate();
        this.amount = declaration.getAmount();
        this.emp_comment = declaration.getEmp_comment();
        this.man_comment = declaration.getMan_comment();
        this.state = declaration.getStatusEnum().name();
        this.emp_id = declaration.getEmp_id();
    }

    public Declaration toDeclaration(){
        return new Declaration(this.description, this.date, this.amount, this.emp_comment, this.man_comment,
                StateEnum.valueOf(this.state), this.emp_id);
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

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Long getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(Long emp_id) {
        this.emp_id = emp_id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeclarationModel that = (DeclarationModel) o;
        return Double.compare(that.amount, amount) == 0 &&
                id.equals(that.id) &&
                description.equals(that.description) &&
                date.equals(that.date) &&
                emp_comment.equals(that.emp_comment) &&
                man_comment.equals(that.man_comment) &&
                state.equals(that.state) &&
                emp_id.equals(that.emp_id) &&
                files.equals(that.files);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, date, amount, emp_comment, man_comment, state, emp_id, files);
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
                ", state=" + state +
                ", emp_id=" + emp_id +
                '}';
    }
}
