package com.declaratie.declaratieapi.repository;

import com.declaratie.declaratieapi.model.Product;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;

@Repository
public class TestData {

    private LinkedList<Product> products = new LinkedList<>();

    public TestData(){
        this.initProds();
    }

    private void initProds(){
        for (int i = 0; i < 5; i++) {
            Product tmp = new Product(i, "Razor"+i, "Laptop", 2500+i);
            this.products.add(tmp);
            tmp = null;
        }
    }

    public boolean create(Product product){
        return this.products.add(product);
    }

    public List<Product> getProductList(){
        return products;
    }

    public boolean delete(int id){
        return products.size() > 0 ? products.removeIf(x -> x.getId() == id) : false;
    }
}
