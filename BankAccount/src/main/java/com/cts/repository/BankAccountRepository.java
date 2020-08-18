package com.cts.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import com.cts.entity.Account;

@Component
@Repository
public interface BankAccountRepository extends JpaRepository<Account, Integer> {

	@Query(value = "SELECT * FROM account WHERE account.pan_no=:panNo", nativeQuery = true)
	Optional<Account> findByUserId(String panNo);

}
