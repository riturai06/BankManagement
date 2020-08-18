package com.cts.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import com.cts.controller.CustomerController;
import com.cts.entity.Account;
import com.cts.entity.ApplicationUser;
import com.cts.model.User;
import com.cts.repository.UserRepository;
import com.cts.serviceimplementation.CustomerServiceImplementation;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ControllerTest {

	@InjectMocks
	CustomerController controller;
	
	@InjectMocks
	ApplicationUser user;
	@InjectMocks
	UserRepository repository;
	@MockBean
	CustomerServiceImplementation service;

    private MockMvc mockMvc;
	
	@Autowired
	WebApplicationContext webApplicationContext;
	
	
	

	@Test
	public void should_CreateAccount_When_ValidRequest() throws Exception {
		
		when(service.createUser(any(ApplicationUser.class))).thenReturn(new ApplicationUser());
		
		mockMvc.perform(post("/users/signup")
			   .contentType(MediaType.APPLICATION_JSON)
			   .content("{ \"username\": \"abhi\", \"password\":\"abhi\",\"emailId\":\"Tromu98@gmail.com\",\"mobileNumber\":\"7906146618\" }")						
			   .accept(MediaType.APPLICATION_JSON))
			   .andExpect(status().isCreated())
			   .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
			   .andExpect(header().string("Location", "/buyer/signup"))
			   .andExpect(jsonPath("$.firstName").value("abhi"))			   
			   .andExpect(jsonPath("$.password").value("SAVINGS"))
			   .andExpect(jsonPath("$.emailId").value("Tromu98@gmail.com"))
			   .andExpect(jsonPath("$.contactNo").value("7906146618"));		
	}
	

}
