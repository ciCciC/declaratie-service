package com.declaratie.declaratieapi.model;

import javax.persistence.*;

@Entity
@Table(name = "Product")
public class Product {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "price")
    private double price;
//    private ProductEnum productType;

    public Product(){
        super();
    }

    public Product(String name, String type, double price){
        super();
        this.name = name;
        this.type = type;
        this.price = price;
//        this.productType = productType;
    }

    public Product(long id, String name, String type, double price){
        super();
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", price=" + price +
                '}';
    }
}
