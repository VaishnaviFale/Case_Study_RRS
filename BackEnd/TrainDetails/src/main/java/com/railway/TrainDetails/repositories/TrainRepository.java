package com.railway.TrainDetails.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.railway.TrainDetails.models.Train_details;

@Repository
public interface TrainRepository extends MongoRepository<Train_details, String>{

	@Query("{ origin: ?0},{ destination: ?1}")
	List<Train_details> findBySort(String origin, String destination);

}
