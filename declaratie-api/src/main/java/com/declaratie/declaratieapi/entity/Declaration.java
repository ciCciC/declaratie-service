package com.declaratie.declaratieapi.entity;
import com.declaratie.declaratieapi.enums.StatusEnum;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;

@Entity
@Table(name = "Declaration")
public class Declaration {

    public Declaration(){
        super();
    }

    public Declaration(String description, Date date, double amount, String emp_comment, String man_comment, StatusEnum status, long emp_id) {
        super();
        this.description = description;
        this.date = date;
        this.amount = amount;
        this.emp_comment = emp_comment;
        this.man_comment = man_comment;
        this.status = status;
        this.emp_id = emp_id;
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "description")
    private String description;

    @Temporal(TemporalType.DATE)
    @Column(name = "date")
    private Date date;

    @Column(name = "amount")
    private double amount;

    @Column(name = "emp_comment", nullable = true)
    private String emp_comment;

    @Column(name = "man_comment", nullable = true)
    private String man_comment;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private StatusEnum status;

    @Column(name = "emp_id")
    private long emp_id;

//    @Column(name = "image")
//    private Blob image;

//    @Column(name = "files")
//    private ArrayList<DeclarationFile> files;


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

    public StatusEnum getStatusEnum() {
        return status;
    }

    public void setStatusEnum(StatusEnum statusEnum) {
        this.status = statusEnum;
    }

    public long getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(long emp_id) {
        this.emp_id = emp_id;
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
                ", status=" + status +
                ", emp_id=" + emp_id +
                '}';
    }
}
