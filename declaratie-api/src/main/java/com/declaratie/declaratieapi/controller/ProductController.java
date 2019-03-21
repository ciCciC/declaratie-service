package com.declaratie.declaratieapi.controller;


import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {

//
//    @GetMapping("/product")
//    public List<Product> index(){
//        return productRepository.getAll();
//    }
//
//    @PostMapping("/product/create")
//    @ResponseStatus(HttpStatus.CREATED)
////    @Override
//    public ResponseEntity<String> create(Product product){
//        boolean status = productRepository.create(product);
//        return this.getStatusResponse(status);
//    }
//
//    @GetMapping("/product/{id}")
////    @Override
//    public Product read(@PathVariable("id") long id) {
//        Product tmp = productRepository.read(id);
//        return tmp;
//    }
//
//    @PutMapping("/product/{id}")
//    @ResponseStatus(HttpStatus.OK)
////    @Override
//    public ResponseEntity<String> update(@PathVariable( "id" ) long id,
//                                         @RequestBody Product product) {
//        return null;
//    }
//
//    @DeleteMapping("/product/{id}")
//    @ResponseStatus(HttpStatus.OK)
////    @Override
//    public ResponseEntity<String> delete(@PathVariable("id") long id) {
//        System.out.println("Delete product with ID = " + id);
//
//        boolean status = productRepository.delete(id);
//
//        return this.getStatusResponse(status);
//    }
//
//    private ResponseEntity<String> getStatusResponse(boolean status){
//        return status ? new ResponseEntity<>("Process: good", HttpStatus.OK) :
//                new ResponseEntity<>("Process: failure", HttpStatus.NOT_FOUND);
//    }

}
