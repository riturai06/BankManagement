package com.cts.serviceimplementation;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cts.entity.MutualFund;
import com.cts.repository.MutualFundRepository;

@Service
public class MutualFundService {

	@Autowired
	MutualFundRepository repository;

	public MutualFund addMutualFundDetails(@Valid MutualFund mutualfund) {
		return repository.save(mutualfund);
	}

	public List<MutualFund> getDetail(String panNo) {
		return repository.findFundDetails(panNo);
	}

	public List<MutualFund> getTransactionDetail(String panNo, Integer fundId) {
		return repository.getTransaction(panNo, fundId);
	}

}
