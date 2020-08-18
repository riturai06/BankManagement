package com.cts.servicImplementation;

import java.util.List;
import java.util.Optional;
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

	public Optional<Account> getDetail(String panNo) {

		return repository.findByUserId(panNo);

	}

	public Account getAccountDetails(Account account) {

		return repository.save(account);
	}
	

	public List<Account> getAccount() {
		return (List<Account>) repository.findAll();
	}

}

/*
 * public List<PurchaseResponse> getAllPurchase(Integer buyerId) {
 * List<PurchaseResponse> purchaseResponse = new ArrayList<PurchaseResponse>();
 * List<PurchaseHistory> purchaseHistory =
 * purchaseRepository.findByBuyerId(buyerId);
 * 
 * for(PurchaseHistory history : purchaseHistory) { PurchaseResponse sethistory
 * = new PurchaseResponse(); sethistory.setPurchaseId(history.getPurchaseId());
 * sethistory.setItemId(history.getItemId());
 * sethistory.setNumberOfItems(history.getNumberOfItems());
 * sethistory.setPurchaseRemarks(history.getPurchaseRemarks());
 * purchaseResponse.add(sethistory); }
 * 
 * return purchaseResponse;
 * 
 * }
 */