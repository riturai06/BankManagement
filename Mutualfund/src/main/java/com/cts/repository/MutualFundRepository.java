package com.cts.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.cts.entity.MutualFund;

@Repository
public interface MutualFundRepository extends JpaRepository<MutualFund, Integer> {

	@Query(value = "SELECT * FROM mutual_fund muf WHERE muf.pan_no=:panNo ", nativeQuery = true)
	List<MutualFund> findFundDetails(String panNo);

	@Query(value = "SELECT * FROM mutual_fund muf WHERE muf.pan_no=:panNo AND muf.fund_id=:fundId", nativeQuery = true)
	List<MutualFund> getTransaction(String panNo, Integer fundId);

}
