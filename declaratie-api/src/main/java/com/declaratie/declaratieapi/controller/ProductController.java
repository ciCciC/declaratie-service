package com.declaratie.declaratieapi.controller;


import com.declaratie.declaratieapi.model.Product;
import com.declaratie.declaratieapi.repository.ProductRepository;
import com.declaratie.declaratieapi.repository.TestData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {

    private TestData testData = new TestData();

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/product")
    public List<Product> index(){
        return testData.getProductList();
    }

    @PostMapping("/product/create")
    public ResponseEntity<String> create(Product product){
        boolean status = testData.create(product);
        return this.getStatusResponse(status);
    }

    @GetMapping("/product/{id}")
    public Product read(@PathVariable("id") int id) {
        Product tmp = new Product(823, "Razor", "Laptop", 2500);
        return tmp;
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") int id) {
        System.out.println("Delete product with ID = " + id);

//        productRepository.deleteById(id);

        boolean status = testData.delete(id);
        return this.getStatusResponse(status);
    }

    private ResponseEntity<String> getStatusResponse(boolean status){
        return status ? new ResponseEntity<>("Process: good", HttpStatus.OK) :
                new ResponseEntity<>("Process: failure", HttpStatus.NOT_FOUND);
    }

}
