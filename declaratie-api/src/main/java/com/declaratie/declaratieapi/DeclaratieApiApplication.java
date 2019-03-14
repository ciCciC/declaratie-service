package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.controller.DeclarationController;
import com.declaratie.declaratieapi.dao.DeclarationFileRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.enums.FileTypeEnum;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
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
	ApplicationRunner initSomeExampleList(DeclarationService declarationService) {
		return args -> {
			Stream.of("Benzine", "Eten", "Boek", "Administratie materiaal", "Make up",
					"Bier", "Ferrari", "Computer").forEach(description -> {

				Declaration declaration = new Declaration(description, new Date(), 120,
						"Employee", "Manager houdt van bier", StateEnum.SUBMITTED, 12);

				byte [] tmp = new byte []{111, 127};

				try{
					declaration.addDeclarationFile(new DeclarationFile(FileTypeEnum.jpeg, tmp));
					declaration.addDeclarationFile(new DeclarationFile(FileTypeEnum.png, tmp));

					Declaration dec = declarationService.create(declaration);

				}catch(UnprocessableDeclarationException ex){
					logger.info("Voorbeeld declaraties kan niet aangemaakt worden.");
				}
			});
		};
	}

}
