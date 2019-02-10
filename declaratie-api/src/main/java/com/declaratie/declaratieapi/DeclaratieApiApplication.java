package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.dao.ProductRepository;
import com.declaratie.declaratieapi.model.Product;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class DeclaratieApiApplication {

	public static void main(String[] args) {
		ProductRepository productRepository = new ProductRepository();
		for (int i = 0; i < 10; i++) {
			Product product = new Product(222, "Asus" + i, "Laptop", 1234+i);
			productRepository.create(product);
		}

		List<Product> products = productRepository.getAll();
		products.forEach(p -> System.out.println(p.getName()));

		System.out.println("-----------------");

		System.out.println("getProduct: " + productRepository.read(2).toString());

		SpringApplication.run(DeclaratieApiApplication.class, args);
	}
}
