package com.railway.TrainDetails;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import com.railway.TrainDetails.models.Train_details;
import com.railway.TrainDetails.repositories.TrainRepository;
import com.railway.TrainDetails.service.TrainService;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootTest
class TrainDetailsApplicationTests {

	@Autowired
	private TrainService trainService;

	@MockBean
	private TrainRepository trainrepository;

	@Test
	public void getTrainTest() {
		when(trainrepository.findAll())
				.thenReturn(Stream
						.of(new Train_details("1", "AMT EXPRESS", "10AM", "Badnera", "Amravati", 100),
								new Train_details("2", "NGP EXPRESS", "11AM", "PUNE", "Nagpur", 500))
						.collect(Collectors.toList()));
		assertEquals(2, trainService.getContact().size());
	}

	@Test
	public void saveTrainTest() {
		Train_details train = new Train_details("3", " EXPRESS", "10AM", "HYDRABAD", "NAGPUR", 500);
		when(trainrepository.save(train)).thenReturn(train);
		assertEquals(train, trainService.addTrain(train));

	}

	@Test
	public void deleteUserTest() {
		Train_details train = new Train_details("1", "AMT EXPRESS", "10AM", "Badnera", "Amravati", 100);
		trainService.deleteTrain(train);
		verify(trainrepository, times(1)).delete(train);
	}

}