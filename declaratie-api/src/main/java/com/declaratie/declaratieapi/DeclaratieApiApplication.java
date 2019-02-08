package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.dao.ProductDao;
import com.declaratie.declaratieapi.model.Product;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class DeclaratieApiApplication {

	public static void main(String[] args) {
		ProductDao productDao = new ProductDao();
		for (int i = 0; i < 10; i++) {
			Product product = new Product(222, "Asus" + i, "Laptop", 1234+i);
			productDao.saveStudent(product);
		}

		List<Product> students = productDao.getStudents();
		students.forEach(p -> System.out.println(p.getName()));

		SpringApplication.run(DeclaratieApiApplication.class, args);
	}
}
