package com.declaratie.declaratieapi.controller;


import com.declaratie.declaratieapi.model.Product;
import com.declaratie.declaratieapi.dao.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/product")
    public List<Product> index(){
        return productRepository.getAll();
    }

    @PostMapping("/product/create")
    public ResponseEntity<String> create(Product product){
        boolean status = productRepository.create(product);
        return this.getStatusResponse(status);
    }

    @GetMapping("/product/{id}")
    public Product read(@PathVariable("id") long id) {
        Product tmp = productRepository.read(id);
        return tmp;
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") int id) {
        System.out.println("Delete product with ID = " + id);

//        productRepository.deleteById(id);

//        boolean status = testData.delete(id);
        return this.getStatusResponse(false);
    }

    private ResponseEntity<String> getStatusResponse(boolean status){
        return status ? new ResponseEntity<>("Process: good", HttpStatus.OK) :
                new ResponseEntity<>("Process: failure", HttpStatus.NOT_FOUND);
    }

}
