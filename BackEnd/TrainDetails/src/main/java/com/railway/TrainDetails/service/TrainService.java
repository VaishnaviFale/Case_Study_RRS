package com.railway.TrainDetails.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railway.TrainDetails.models.Train_details;
import com.railway.TrainDetails.repositories.TrainRepository;

@Service
public class TrainService {

	@Autowired
	private TrainRepository trainRepository;
	

	public Train_details addTrain (Train_details train) {
		return trainRepository.save(train);
	}

	public List<Train_details> getContact() {
		List<Train_details> train = trainRepository.findAll();
		System.out.println("Getting data from DB : " + train);
		return train;
	}

	public Optional<Train_details> getTrainbyId(String id) {
		return trainRepository.findById(id);
	}

	public void deleteTrain(Train_details train) {
		trainRepository.delete(train);
	}


}