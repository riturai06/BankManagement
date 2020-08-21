package com.cts;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.cts.entity.ApplicationUser;
import com.cts.repository.UserRepository;
import com.cts.serviceimplementation.CustomerServiceImplementation;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CustomerRegistrationApplication.class)

class CustomerServiceTest {

	@Mock
	private UserRepository repo;

	@InjectMocks
	private CustomerServiceImplementation service;

	@Test
	public void testGetCustomer() {
		ApplicationUser user = new ApplicationUser("0000", "Rai", "Rtu", "raci@gmail.com", null, "123", "123", null,
				null);
		when(repo.findByPanNo("0000")).thenReturn(user);
		assertEquals(user, service.getUserByPan("0000"));
	}

}
