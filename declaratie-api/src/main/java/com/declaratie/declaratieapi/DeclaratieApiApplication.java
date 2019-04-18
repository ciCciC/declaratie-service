package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.controller.DeclarationController;
import com.declaratie.declaratieapi.dao.DeclarationRepository;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.enums.StateEnum;
import com.declaratie.declaratieapi.exceptionHandler.UnprocessableDeclarationException;
import com.declaratie.declaratieapi.model.DeclarationModel;
import com.declaratie.declaratieapi.service.DeclarationService;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.springframework.context.annotation.Bean;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.*;
import java.util.stream.Collectors;
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
			Random rand = new Random();

			final File file = new File("./testimg");
			List<File> files = Arrays.asList(file.listFiles()).stream().filter(value -> !value.getName().equals(".DS_Store")).collect(Collectors.toList());

			Stream.of("Benzine1", "Eten2", "Benzine3", "Drinken4", "Eten5", "Benzine6").forEach(description -> {

				int randomChoice = rand.nextInt((3 - 0) + 1) + 0;
				int randomFile = rand.nextInt((1 - 0) + 1) + 0;

				Declaration declaration = new Declaration(description, new Date(), 120,
						"Hier staat medewerker zijn bericht", "Hier staat manager zijn bericht", StateEnum.values()[randomChoice], 12);

				byte [] tmp = new byte[0];

				try{
					tmp = Files.readAllBytes(files.get(randomFile).toPath());

					declaration.addDeclarationFile(new DeclarationFile(files.get(randomFile).getName(), tmp));
					declaration.addDeclarationFile(new DeclarationFile(files.get(randomFile).getName(), tmp));

					DeclarationModel dec = declarationService.create(new DeclarationModel(declaration));

				}catch(ResponseStatusException | IOException ex){
					logger.info("Voorbeeld declaraties kan niet aangemaakt worden.");
				}
			});
		};
	}

}
