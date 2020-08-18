package com.cts.controller;

import java.util.List;
import java.util.Optional;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.cts.entity.Account;
import com.cts.servicImplementation.BankAccountService;


@Component
@RestController
public class BankAccountController {
	
	@Autowired
	BankAccountService accountservice;
	

	Logger logger = LoggerFactory.getLogger(BankAccountController.class);

	@PostMapping("/addAccount")
	public ResponseEntity<Account> addhospital(@Valid @RequestBody Account account) {
		Account accountdetails = accountservice.getAccountDetails(account);
		return new ResponseEntity<Account>(accountdetails, HttpStatus.OK);
	}

	//GET ACCOUNT DETAILS BY PAN NO
	
	@GetMapping("/get/{panNo}")
	public Optional<Account> getAccountDetail(@PathVariable String panNo) {
		Optional<Account> account = accountservice.getDetail(panNo);
		
    //Exception handling if no account details exist for specific user
		
		if(account.isPresent()) {
			logger.info("Response Successfully Executed");
			
				
			}
			else {
				throw new RuntimeException("No Account details exist for this user!!");
				
			}
		return account;
	}
	
	//GET ALL BANK ACCOUNT DETAILS

	@GetMapping("/getAll")
	List<Account> getAccountDetail() {
		List<Account> account = accountservice.getAccount();
		
		//Exception handling for account details
		
		if(account.isEmpty()) {
			throw new RuntimeException("No Account exist!!");
		}
		else
		{
			logger.info("Account details");
		}
		return account;
	}

}
