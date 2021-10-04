package com.railway.TrainReservation.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.railway.TrainReservation.model.Reservation;

public interface ReservationRepository extends MongoRepository<Reservation, String> {
	
	List<Reservation> deleteByPnr(long pnr);
	
	@Query("{ 'pnr': ?0 }")
	List<Reservation> findByPnr(long pnr);

}