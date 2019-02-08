//package com.declaration.microservice.declarationwebapp.Model;
package com.declaratie.declaratieapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {

    @Id
    @Column
    @GeneratedValue
    private long id;
    @Column
    private String name;
    @Column
    private String type;
    @Column
    private double price;
//    private ProductEnum productType;

    public Product(){
        super();
    }

    public Product(long id, String name, String type, double price){
        super();
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
//        this.productType = productType;
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

    //    public ProductEnum getProductType() {
//        return productType;
//    }
//
//    public void setProductType(ProductEnum productType) {
//        this.productType = productType;
//    }
//
//    @Override
//    public String toString() {
//        return "Product{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", productType=" + productType +
//                '}';
//    }
}
