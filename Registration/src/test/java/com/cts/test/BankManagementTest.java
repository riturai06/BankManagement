package com.cts.test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import org.powermock.reflect.Whitebox;

import com.cts.controller.CustomerController;

@RunWith(PowerMockRunner.class)
@PrepareForTest({CustomerController.class})
public class BankManagementTest {
	
	@InjectMocks
	CustomerController customer;
	
	
	@Test
	public void  testpower() throws Exception{
		PowerMockito.mockStatic(CustomerController.class);
		when(CustomerController.testPower(10)).thenReturn(10);
		Integer test=CustomerController.testPower(10);
		Integer actual = new Integer(10);
		assertEquals(test, actual);
		
	}
	
	@Test
	public void testprivate() throws Exception{
		Integer data= (Integer) Whitebox.invokeMethod(customer, "testprivate", 10);
		Integer actual=new Integer(10);
		assertEquals(data, actual);
	}


}
