package com.declaratie.declaratieapi;

import com.declaratie.declaratieapi.controller.DeclarationController;
import com.declaratie.declaratieapi.entity.Declaration;
import com.declaratie.declaratieapi.entity.DeclarationFile;
import com.declaratie.declaratieapi.enums.StateEnum;
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

@SpringBootApplication
public class DeclaratieApiApplication {

	private static final Logger logger = LoggerFactory.getLogger(DeclaratieApiApplication.class);

	public static void main(String[] args) {
		logger.info("Started declaration process application.");
//		--spring.profiles.active=dev
		SpringApplication.run(DeclaratieApiApplication.class, args);
	}

	@Bean
	ApplicationRunner initSomeExampleList(DeclarationService declarationService) {
		return args -> {
			Random rand = new Random();

			final File file = new File("./testimg");
			List<File> files = Arrays.asList(file.listFiles()).stream().filter(value -> !value.getName().equals(".DS_Store")).collect(Collectors.toList());

			List<String> descriptions = Arrays.asList("Benzine1", "Eten2", "Benzine3", "Drinken4", "Eten5", "Benzine6");

			this.fillDatabase(1, 2, descriptions, rand, files, declarationService);

			this.fillDatabase(2, 2, descriptions, rand, files, declarationService);

//			this.fillDatabase(3, 4, descriptions, rand, files, declarationService);
		};
	}

	private void fillDatabase(long empid, long manId, List<String> descriptions, Random rand, List<File> files, DeclarationService declarationService) {

		int count = 0;

		for (String desc: descriptions) {
			int randomChoice = rand.nextInt((3 - 0) + 1) + 0;
			int randomFile = rand.nextInt((1 - 0) + 1) + 0;

			GregorianCalendar date = new GregorianCalendar(2019, 5 + count, 10);

			Declaration declaration = new Declaration(desc, date.getTime(), 120, "Hier staat medewerker zijn bericht",
					"Hier staat manager zijn bericht", StateEnum.values()[randomChoice], empid);
			declaration.setManId(manId);

			byte [] tmp = new byte[0];

			try{
				tmp = Files.readAllBytes(files.get(randomFile).toPath());

				declaration.addDeclarationFile(new DeclarationFile(files.get(randomFile).getName(), tmp));
				declaration.addDeclarationFile(new DeclarationFile(files.get(randomFile).getName(), tmp));

				DeclarationModel dec = declarationService.create(new DeclarationModel(declaration));

				count++;

			}catch(ResponseStatusException | IOException ex){
				logger.info("Voorbeeld declaraties kan niet aangemaakt worden.");
			}
		}
	}

}
