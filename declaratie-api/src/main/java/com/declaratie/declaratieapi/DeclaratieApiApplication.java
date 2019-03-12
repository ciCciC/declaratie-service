package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.controller.DeclarationController;
import com.declaratie.declaratieapi.dao.DeclarationFileRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.enums.FileTypeEnum;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.service.DeclarationService;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import org.slf4j.Logger;

import java.util.stream.Stream;

@SpringBootApplication
public class DeclaratieApiApplication {

	private static final Logger logger = LoggerFactory.getLogger(DeclarationController.class);

	public static void main(String[] args) {

		logger.info("Called application class.");

		SpringApplication.run(DeclaratieApiApplication.class, args);
	}

	@Bean
	ApplicationRunner initSomeExampleList(DeclarationService declarationService, DeclarationFileRepository declarationFileRepository) {
		return args -> {
			Stream.of("Benzine", "Eten", "Boek", "Administratie materiaal", "Make up",
					"Bier", "Ferrari", "Computer").forEach(description -> {

				Declaration declaration = new Declaration(description, new Date(), 120,
						"Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

				byte [] tmp = new byte []{111, 127};

				Declaration dec = declarationService.create(declaration);

				dec.addDeclarationFile(new DeclarationFile(FileTypeEnum.jpeg, tmp, dec));
				dec.addDeclarationFile(new DeclarationFile(FileTypeEnum.png, tmp, dec));

				declarationService.create(dec);
			});

			declarationService.getAll().forEach(System.out::println);
		};
	}

}
