package com.railway.TrainDetails;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import com.railway.TrainDetails.models.Train_details;
import com.railway.TrainDetails.repositories.TrainRepository;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;

import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient
public class TrainDetailsApplication implements CommandLineRunner {

	private final TrainRepository trainRepository;

	@Autowired
	public TrainDetailsApplication(TrainRepository trainRepository) {
		this.trainRepository = trainRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(TrainDetailsApplication.class, args);
		System.out.println("Done 1 !");
	}

	@Override
	public void run(String... args) throws Exception {
		if (trainRepository.findAll().isEmpty()) {

			trainRepository.save(new Train_details("1", "KARACHI EXPRESS", "17:30", "KARACHI CANTT", "LAHORE", 120));
			trainRepository.save(new Train_details("2", "PAKISTAN EXPRESS", "14:30", "KARACHI", "RAWALPINDI", 50));
			trainRepository.save(new Train_details("3", "SUPER EXPRESS", "10:00", "KARACHI CANTT", "SARGODHA", 60));
			trainRepository.save(new Train_details("4", "new EXPRESS", "10:00", "KARACHI CANTT", "SARGODHA", 100));

		}

		for (Train_details train_details : trainRepository.findAll()) {
			System.out.println(train_details);
		}
	}
	@Bean
	public Docket swaggerConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.railway"))
				.build()
				.apiInfo(apiDetails());
	}
	private ApiInfo apiDetails() {
		return new ApiInfo(
				"Train Details API",
				"API for Railway Reservation System",
				"1.0",
				"Free to use",
				new springfox.documentation.service.Contact("Vaishnavi Sanjay Fale", null, "vaishnavi.fale28@gmail.com"),
				"",
				"",
				Collections.emptyList());
	}
	

}
