package com.railway.TrainReservation.model;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.*;

@Data
@AllArgsConstructor
@Document
public class Reservation {
	
	@Id
	private String id;
	
	@Field
	private String name;
	
	@Field
	private String sex;
	
	@Field
	private int age;
	
	@Field
	private String address;
	
	@Field
	private long creditno;
	
	@Field
	private String bank;
	
	@Field
	private String className;
	
	@Field
	private int quantity;
	
	@Field
	private String origin;
	  
	@Field
	private String destination;
	
	@Field
	private Date date;
	
	@Field
	private long pnr;
	
	public Reservation() {
		
	}

	

	public Reservation(String id, String name, String sex, int age, String address, long creditno, String bank,
			String className, int quantity, String origin, String destination, Date date,long pnr) {
		super();
		this.id = id;
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.address = address;
		this.creditno = creditno;
		this.bank = bank;
		this.className = className;
		this.quantity = quantity;
		this.origin = origin;
		this.destination = destination;
		this.date = date;
		this.pnr=pnr;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}
	
	

	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getSex() {
		return sex;
	}



	public void setSex(String sex) {
		this.sex = sex;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public long getCreditno() {
		return creditno;
	}



	public void setCreditno(long creditno) {
		this.creditno = creditno;
	}



	public String getBank() {
		return bank;
	}



	public void setBank(String bank) {
		this.bank = bank;
	}



	public String getClassName() {
		return className;
	}



	public void setClassName(String className) {
		this.className = className;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}
	
	
	public long getPnr() {
		return pnr;
	}
	public void setPnr() {
		long number=(long) Math.floor(Math.random() * 9_000_000_00L)+1_000_000_00L;
		this.pnr = number;
	}


	@Override
	public String toString() {
		return "Reservation [id=" + id + ", name=" + name + ", sex=" + sex + ", age=" + age + ", address=" + address
				+ ", creditno=" + creditno + ", bank=" + bank + ", className=" + className + ", quantity=" + quantity
				+ ", origin=" + origin + ", destination=" + destination + ", date=" + date +", pnr="+pnr+ "]";
	}


}

	

	
