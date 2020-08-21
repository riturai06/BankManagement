package com.cts;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cts.controller.CustomerController;
import com.cts.entity.ApplicationUser;
import com.cts.serviceimplementation.CustomerServiceImplementation;

@SpringBootTest(classes = CustomerRegistrationApplication.class)
@RunWith(SpringRunner.class)
class CustomerControllerTest {

	@Autowired
	private ApplicationUser user;

	@InjectMocks
	CustomerController customer;

	@MockBean
	private CustomerServiceImplementation customerService;

	@Test
	public void addCustomerTest() throws Exception {
		when(customerService.createUser(user))
				.thenReturn(new ApplicationUser("9999", "sig", "sig", "sig@xyz.com", null, "123", "123", null, null));
		assertEquals("sig", customerService.createUser(user).getFirstName());

	}
}