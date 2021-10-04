package com.railway.TrainReservation.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railway.TrainReservation.model.Reservation;
import com.railway.TrainReservation.repository.ReservationRepository;
import com.railway.TrainReservation.service.TrainReservationService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/orders")
public class ReservationController {
	
	@Autowired
	private ReservationRepository reservationRepository;
	
	@Autowired
	public ReservationController (ReservationRepository reservationRepository) {
		this.reservationRepository = reservationRepository;
	}
	
	@GetMapping("/{pnr}")
	public List<Reservation> getBypnr(@PathVariable long pnr){
		return reservationRepository.findByPnr( pnr);
	}

	@PostMapping("/addOrder")
	public String addTicket(@RequestBody Reservation add) {
		add.setPnr();
		reservationRepository.save(add);
	return "Booked ticket with pnrNo. :  " + add.getPnr();
    }
	
	@GetMapping("/findAllPass")
    public List<Reservation> getPassenger(){
	return reservationRepository.findAll();
	}
	
	
//	@PutMapping("/update/{id}")
//	public BookTickets updateTicket(@PathVariable("id") String id,@RequestBody BookTickets order ) {
//		order.setId(id);
//		ticketRepository.save(order);
//		return order;
//	}
		
	 @DeleteMapping("/delete/{pnr}")
	 public String deleteTicket (@PathVariable long pnr) {
		 reservationRepository.deleteByPnr(pnr);
		return "Order deleted with pnrNo. : "+pnr;
		}
	}
	


// http://localhost:8091/orders/addOrder
// http://localhost:8091/orders/delete/{pnr}
// http://localhost:8091/orders/{pnr}
	
	