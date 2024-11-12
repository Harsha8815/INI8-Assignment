/**
 * 
 */
package com.example.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Backend.model.user;


public interface UserRepository extends JpaRepository<user, Long>{

	/**
	 * @param args
	 */
	

}
