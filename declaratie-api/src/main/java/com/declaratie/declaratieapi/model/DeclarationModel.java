package com.declaratie.declaratieapi.model;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StateEnum;
import java.util.*;
import java.util.stream.Collectors;

public class DeclarationModel implements Comparable<DeclarationModel> {

    private Long id;
    private String description;
    private Date date;
    private double amount;
    private String empComment;
    private String manComment;
    private String status;
    private Long empId;
    private Long manId;
    private List<DeclarationFileModel> files;

    public DeclarationModel() {
        this.id = 0L;
        this.description = "";
        this.date = new Date();
        this.amount = 0;
        this.empComment = "";
        this.manComment = "";
        this.status = "";
        this.empId = 0L;
        this.manId = 0L;
    }

    public DeclarationModel(Declaration declaration){
        this.id = declaration.getId();
        this.description = declaration.getDescription();
        this.date = declaration.getDate();
        this.amount = declaration.getAmount();
        this.empComment = declaration.getEmpComment();
        this.manComment = declaration.getManComment();
        this.status = declaration.getStatusEnum().name();
        this.empId = declaration.getEmpId();
        this.manId = declaration.getManId();

        this.files = declaration.getFiles() != null ? declaration.getFiles()
                .stream().map(DeclarationFileModel::new)
                .collect(Collectors.toList()) : new ArrayList<>();
    }

    public Declaration toDeclaration(){
        Declaration transformed = new Declaration(this.description, this.date, this.amount, this.empComment, this.manComment,
                StateEnum.valueOf(this.status), this.empId);

        transformed.setManId(this.getManId());

        transformed.setFiles(this.getFiles() != null ? this.getFiles()
                .stream().map(data -> data.toDeclarationFile())
                .collect(Collectors.toList()) : new ArrayList<>());

        return transformed;
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

    public String getEmpComment() {
        return empComment;
    }

    public void setEmpComment(String emp_comment) {
        this.empComment = emp_comment;
    }

    public String getManComment() {
        return manComment;
    }

    public void setManComment(String man_comment) {
        this.manComment = man_comment;
    }

    public Long getEmpId() {
        return empId;
    }

    public void setEmpId(Long emp_id) {
        this.empId = emp_id;
    }

    public Long getManId() {
        return manId;
    }

    public void setManId(Long manId) {
        this.manId = manId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<DeclarationFileModel> getFiles() {
        return files;
    }

    public void setFiles(List<DeclarationFileModel> declarationFileModels) {
        this.files = declarationFileModels;
    }

    public void addFile(DeclarationFileModel file) {
        this.getFiles().add(file);
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
                empComment.equals(that.empComment) &&
                manComment.equals(that.manComment) &&
                status.equals(that.status) &&
                empId.equals(that.empId) &&
                files.equals(that.files);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, date, amount, empComment, manComment, status, empId, files);
    }

    @Override
    public String toString() {
        return "DeclarationModel{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", amount=" + amount +
                ", empComment='" + empComment + '\'' +
                ", manComment='" + manComment + '\'' +
                ", state=" + status +
                ", empId=" + empId +
                ", files=" + files.size() +
                '}';
    }

    @Override
    public int compareTo(DeclarationModel o) {
        return this.getId() < o.getId() ? 1 : -1;
    }
}
