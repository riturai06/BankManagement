package com.cts.servicImplementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import com.cts.entity.Account;
import com.cts.repository.ApplicationRepository;
import com.cts.repository.BankAccountRepository;

@Component
@Service
public class BankAccountService {
	@Autowired
	BankAccountRepository repository;
	@Autowired
	ApplicationRepository dao;

	public List<Account> getDetail(String panNo) {

		return repository.findByPanNo(panNo);

	}

	public Account addAccountDetails(Account account) {

		return repository.save(account);
	}

	public List<Account> getAccount() {
		return (List<Account>) repository.findAll();
	}

}
