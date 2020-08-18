package com.cts.controller;

import java.util.List;

import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.cts.entity.Account;
import com.cts.entity.ApplicationUser;
import com.cts.serviceimplementation.CustomerServiceImplementation;

@RestController
@RequestMapping("/users")
public class CustomerController {

	@Autowired
	CustomerServiceImplementation customerService;
	@Autowired
	ApplicationUser user;
	@Autowired
	RestTemplate restTemplate;

	Logger logger = LoggerFactory.getLogger(CustomerController.class);

	@PostMapping(value = "/sign-up", produces = "application/json")
	public ApplicationUser createUser(@Valid @RequestBody ApplicationUser user) {
		ApplicationUser details =  customerService.createUser(user);
		if(details.getPanNo().isEmpty()) {
			logger.info("Response Successfully Executed");
			
		}
		else {
			throw new RuntimeException("User with same pan No already exist!!");
		}

		return details;

	}

	/*
	 @PostMapping(value = "/AddAccount", produces = "application/json") 
	 public Account createAccount(@Valid @RequestBody Account user) { 
	 final String Url="http://localhost:8083/addAccount";
	 RestTemplate restTemplate= new RestTemplate(); 
	 RequestEntity requestEntity;
	 Account users = restTemplate.exchange(requestEntity, responseType)
	 return users;
	 }
	 */

	// GETTING ACCOUNT BY PAN NO

	
	@GetMapping(value = "/getBypanNo/{panNo}", produces = "application/json")
	public Account getUserById(@PathVariable("panNo") String panNo) {

		final String Url = "http://localhost:8083/get/{panNo}";
		RestTemplate restTemplate = new RestTemplate();
		Account user = restTemplate.getForObject(Url, Account.class, panNo);
		return user;
	}
	
	
	

	// FOR GETTING TRANSACTION DETAILS

	@GetMapping(value = "/getTransactionDetails/{panNo}", produces = "application/json")
	public ResponseEntity<String> getTransactionDetails(@PathVariable("panNo") String panNo) {

		final String Url = "http://localhost:8800/getFundDetails/{panNo}";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> user = restTemplate.getForEntity(Url, String.class, panNo);
		return user;
	}

	// FOR GETTING INVESTMENT DETAILS

	@GetMapping(value = "/getInvestmentDetails/{panNo}/{fundId}", produces = "application/json")
	public String getTransactionDetails(@PathVariable("panNo") String panNo, @PathVariable("fundId") Integer fundId) {
		final String Url = "http://localhost:8800/getInvestmentDetails/{panNo}/{fundId}";
		RestTemplate restTemplate = new RestTemplate();
		String user = restTemplate.getForObject(Url, String.class, panNo, fundId);
		return user;
	}

	// for getting All account details

	@GetMapping(value = "/getAllAccounts", produces = "application/json")
	public ResponseEntity<String> getAllAccountDetails() {

		final String Url = "http://localhost:8083/getAll";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> user = restTemplate.getForEntity(Url, String.class);
		return user;
	}

	public static Integer testPower(Integer power) {
		return power;
	}
	
	private Integer testprivate(Integer test) {
		return test;
	}


}
