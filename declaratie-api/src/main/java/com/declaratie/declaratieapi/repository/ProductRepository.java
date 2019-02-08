package com.declaratie.declaratieapi.repository;

import com.declaratie.declaratieapi.interfaces.IRest;
import com.declaratie.declaratieapi.model.Product;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository implements IRest<Product>{

    @Override
    public boolean create(Product product) {
        return false;
    }

    @Override
    public Product read(int id) {
        return null;
    }

    @Override
    public boolean update(Product product) {
        return false;
    }

    @Override
    public boolean delete(int id) {
        return false;
    }
}
