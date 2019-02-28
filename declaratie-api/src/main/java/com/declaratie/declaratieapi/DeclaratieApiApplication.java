package com.declaratie.declaratieapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
public class DeclaratieApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeclaratieApiApplication.class, args);
	}
}
