package com.declaratie.declaratieapi.entity;
import com.declaratie.declaratieapi.enums.StateEnum;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.*;

@Entity
@Table
public class Declaration {

    public Declaration(){
    }

    public Declaration(String description, Date date, double amount, String empComment, String manComment, StateEnum state, long empId) {
        this.description = description;
        this.date = date;
        this.amount = amount;
        this.empComment = empComment;
        this.manComment = manComment;
        this.state = state;
        this.empId = empId;
        this.files = new ArrayList<>();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    @NotNull(message = "Beschrijving should not be null.")
    @Size(min = 1, max = 255, message = "Beschrijving should be between 1 and 255 characters.")
    private String description;

    @Temporal(TemporalType.DATE)
    @Column
    @NotNull(message = "Datum should not be null.")
    private Date date;

    @Column
    @NotNull(message = "Bedrag should not be null.")
    @DecimalMin(value = "0.01", message = "Bedrag must be greater than or equal to 0,01.")
    private double amount;

    @Column
    private String empComment;

    @Column
    private String manComment;

    @Enumerated(EnumType.STRING)
    @Column
    @NotNull(message = "Status should not be null.")
    private StateEnum state;

    @Column
    private String city;

    @Column
    @NotNull(message = "Medewerker ID should not be null.")
    private long empId;

    @OneToMany(targetEntity = DeclarationFile.class, mappedBy = "declaration", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<DeclarationFile> files;

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

    public StateEnum getStatusEnum() {
        return state;
    }

    public void setStatusEnum(StateEnum state) {
        this.state = state;
    }

    public long getEmpId() {
        return empId;
    }

    public void setEmpId(long emp_id) {
        this.empId = emp_id;
    }

    public void addDeclarationFile(DeclarationFile declarationFile){
        this.getFiles().add(declarationFile);
        declarationFile.setDeclarationId(this);
    }

    public List<DeclarationFile> getFiles() {
        return this.files;
    }

    public void setFiles(List<DeclarationFile> files) {
        for (DeclarationFile file:files) {
            this.addDeclarationFile(file);
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Declaration that = (Declaration) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Declaration{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", amount=" + amount +
                ", empComment='" + empComment + '\'' +
                ", manComment='" + manComment + '\'' +
                ", state=" + state +
                ", empId=" + empId +
                '}';
    }
}
