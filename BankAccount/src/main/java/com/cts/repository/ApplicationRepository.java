package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.entity.Account;


public interface ApplicationRepository extends JpaRepository<Account,Integer>{

}
