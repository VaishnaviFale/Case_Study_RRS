package com.railway.TrainReservation;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.railway.TrainReservation.model.Reservation;
import com.railway.TrainReservation.repository.ReservationRepository;
import com.railway.TrainReservation.service.TrainReservationService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootTest
class TrainReservationApplicationTests {

	@Autowired
	private TrainReservationService trainReservationService;

	@MockBean
	private ReservationRepository reservationRepository;

	@Test
	public void getTrainTest() {
		when(reservationRepository.findAll())
				.thenReturn(Stream
						.of(new Reservation("1", "Vaishnavi", "F", 22, "BY PASS", 123456, "ABI", "HIGH", 4, "NGP", "PUNE", null, 0),
								new Reservation("2", "Arjun", "M", 22, "BY PASS", 98765, "ABI", "HIGH", 3, "NGP", "PUNE", null, 0))
						.collect(Collectors.toList()));
		assertEquals(2, trainReservationService.getContact().size());
	}

	@Test
	public void saveTrainTest() {
		Reservation reservation = new Reservation("3", "Kalpana", "F", 22, "BY PASS", 6778, "ABI", "HIGH", 3, "NGP", "PUNE", null, 0);
		when(reservationRepository.save(reservation)).thenReturn(reservation);
		assertEquals(reservation, trainReservationService.addPassenger(reservation));

	}

	@Test
	public void deleteUserTest() {
		Reservation reservation = new Reservation("1", "Vaishnavi", "F", 22, "BY PASS", 123456, "ABI", "HIGH", 4, "NGP", "PUNE", null, 0);
		trainReservationService.deletePassenger(reservation);
		verify(reservationRepository, times(1)).delete(reservation);
	}

}