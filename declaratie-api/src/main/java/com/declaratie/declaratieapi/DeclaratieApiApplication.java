package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.dao.ProductRepository;
import com.declaratie.declaratieapi.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

import java.io.InputStream;
import java.util.List;
import java.util.Properties;

@SpringBootApplication
public class DeclaratieApiApplication {

	public static void main(String[] args) {
		ProductRepository productRepository = new ProductRepository();
		for (int i = 0; i < 10; i++) {
			Product product = new Product("Asus" + i, "Laptop", 1234+i);
			productRepository.create(product);
		}

		List<Product> products = productRepository.getAll();
		products.forEach(p -> System.out.println(p.getName()));

		System.out.println("-----------------");

		Product tmp = productRepository.read(2);
		System.out.println("Before: " + tmp.toString());

		tmp.setName("Ferrari");
		tmp.setType("Car");
		productRepository.update(tmp);

		Product tmp2 = productRepository.read(2);
		System.out.println("After: " + tmp2.toString());


		SpringApplication.run(DeclaratieApiApplication.class, args);
	}
}
