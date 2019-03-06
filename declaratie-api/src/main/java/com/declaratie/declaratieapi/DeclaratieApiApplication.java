package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.enums.StatusEnum;
import com.declaratie.declaratieapi.service.DeclarationService;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.stream.Stream;

@SpringBootApplication
public class DeclaratieApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeclaratieApiApplication.class, args);
	}

	@Bean
	ApplicationRunner initSomeExampleList(DeclarationService declarationService) {
		return args -> {
			Stream.of("Benzine", "Eten", "Boek", "Administratie materiaal", "Make up",
					"Bier", "Ferrari", "Computer").forEach(description -> {
				Declaration declaration = new Declaration(description, new Date(), 120,
						"Employee", "Manager houdt van bier", StatusEnum.SUBMITTED, 12);
				declarationService.create(declaration);
			});
			declarationService.getAll().forEach(System.out::println);
		};
	}

}
