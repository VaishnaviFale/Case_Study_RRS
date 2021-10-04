package com.railway.TrainDetails.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.railway.TrainDetails.models.Train_details;
import com.railway.TrainDetails.repositories.TrainRepository;


@CrossOrigin("http://localhost:3000") 
//allows restricting the resources implemented in web browsers.
@RestController
@RequestMapping("/search")
public class UserController {
	
	
	private TrainRepository trainRepository;
	
	@Autowired
	public UserController (TrainRepository trainRepository) {
		this.trainRepository = trainRepository;
	}

    @GetMapping("/findAllTrains")
    public List<Train_details> getTrains(){
	return trainRepository.findAll();
	
}
    @GetMapping("/findAllTrains/{id}")
    public Optional<Train_details> getTrains(@PathVariable String id){
	return trainRepository.findById(id);
}
    @RequestMapping(value="/getby/{origin}/{destination}",method=RequestMethod.GET)
	public List<Train_details> getdetailsByDestination(@PathVariable("origin") String origin,
			@PathVariable("destination") String destination){
		return trainRepository.findBySort(origin,destination);
	}
}


// http://localhost:8090/search/getby/{origin}/{destination}
// http://localhost:8090/search/findAllTrains

