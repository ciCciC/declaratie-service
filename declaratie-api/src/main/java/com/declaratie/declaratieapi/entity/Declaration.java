package com.declaratie.declaratieapi.entity;
import com.declaratie.declaratieapi.enums.StateEnum;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Min;
import java.util.*;

@Entity
@Table(name = "Declaration")
public class Declaration {

    public Declaration(){
    }

    public Declaration(String description, Date date, double amount, String emp_comment, String man_comment, StateEnum state, long emp_id) {
        this.description = description;
        this.date = date;
        this.amount = amount;
        this.emp_comment = emp_comment;
        this.man_comment = man_comment;
        this.state = state;
        this.emp_id = emp_id;
        this.files = new ArrayList<>();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "description", nullable = false)
    @Length(min = 1, max = 255)
    private String description;

    @Temporal(TemporalType.DATE)
    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "amount", nullable = false)
    @Min(0)
    private double amount;

    @Column(name = "emp_comment")
    private String emp_comment;

    @Column(name = "man_comment")
    private String man_comment;

    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private StateEnum state;

    @Column(name = "emp_id", nullable = false)
    private long emp_id;

    @OneToMany(mappedBy = "declaration", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
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

    public StateEnum getStatusEnum() {
        return state;
    }

    public void setStatusEnum(StateEnum state) {
        this.state = state;
    }

    public long getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(long emp_id) {
        this.emp_id = emp_id;
    }

    public void addDeclarationFile(DeclarationFile declarationFile){
        this.files.add(declarationFile);
        declarationFile.setDeclaration_id(this);
    }

    public List<DeclarationFile> getFiles() {
        return files;
    }

    public void setFiles(List<DeclarationFile> files) {
        this.files = files;
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
                ", emp_comment='" + emp_comment + '\'' +
                ", man_comment='" + man_comment + '\'' +
                ", state=" + state +
                ", emp_id=" + emp_id +
                '}';
    }
}
