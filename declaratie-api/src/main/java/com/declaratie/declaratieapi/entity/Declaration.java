package com.declaratie.declaratieapi.entity;
import com.declaratie.declaratieapi.enums.StatusEnum;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Declaration")
public class Declaration {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private Date date;

    @Column(name = "amount")
    private double amount;

    @Column(name = "emp_comment")
    private String emp_comment;

    @Column(name = "man_comment")
    private String man_comment;

    @Column(name = "status")
    private StatusEnum statusEnum;

    @Column(name = "emp_id")
    private long emp_id;

//    @Column(name = "files")
//    private ArrayList<DeclarationFile> files;

}
