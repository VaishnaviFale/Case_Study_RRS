package com.railway.TrainReservation.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.railway.TrainReservation.model.Reservation;
import com.railway.TrainReservation.repository.ReservationRepository;

@Service
public class TrainReservationService {

	@Autowired
	private ReservationRepository reservationRepository;
	

	public Reservation addPassenger (Reservation reservation) {
		return reservationRepository.save(reservation);
	}

	public List<Reservation> getContact() {
		List<Reservation> reservation = reservationRepository.findAll();
		System.out.println("Getting data from DB : " + reservation);
		return reservation;
	}

	/*
	 * public Optional<Reservation> getPassengerbyId(String id) { return
	 * reservationRepository.findById(id); }
	 */

	public void deletePassenger(Reservation reservation) {
		reservationRepository.delete(reservation);
	}
	


}