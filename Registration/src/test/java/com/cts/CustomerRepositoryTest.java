package com.cts;

import static org.mockito.Mockito.when;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import com.cts.entity.ApplicationUser;
import com.cts.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CustomerRegistrationApplication.class)
class CustomerRepositoryTest {

	@MockBean
	UserRepository repository;

	@Test
	public void testFindByPanNo() {
		ApplicationUser user = new ApplicationUser("9999", "sig", "sig", "sig@xyz.com", null, "123", "123", null, null);
		when(repository.findByPanNo("9999")).thenReturn(user);
		Assert.assertEquals(user, repository.findByPanNo("9999"));
	}
}
