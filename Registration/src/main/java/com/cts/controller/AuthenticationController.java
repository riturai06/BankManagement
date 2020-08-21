package com.cts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.cts.config.JwtTokenUtil;
import com.cts.entity.ApplicationUser;
import com.cts.model.ApiResponse;
import com.cts.model.AuthToken;
import com.cts.model.User;
import com.cts.serviceimplementation.CustomerServiceImplementation;

@RestController
@RequestMapping("/user")
public class AuthenticationController {

	//FOR LOGIN PURPOSE USING JWT
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	ApplicationUser au;

	@Autowired
	private CustomerServiceImplementation customerService;
	

	//CONTROLLER FOR GENERATING TOKEN IF USER IS AUTHENTICATED
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ApiResponse<AuthToken> register(@RequestBody User user) throws AuthenticationException {

		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		final ApplicationUser authenticateCustomer = customerService.findOne(user.getUsername());
		final String token = jwtTokenUtil.generateToken(authenticateCustomer);
		System.out.println("user successfully login");
		return new ApiResponse<>(200, "success",
				new AuthToken(token, user.getUsername(), authenticateCustomer.getPanNo()));

	}

}
