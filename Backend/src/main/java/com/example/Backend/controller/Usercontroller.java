package com.example.Backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.model.user;
import com.example.Backend.repository.UserRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController	
@CrossOrigin("http://localhost:3000")

public class Usercontroller {
	
	@Autowired
	private UserRepository UserRepository;				

	@PostMapping("/user")
     user newuser(@RequestBody user newuser) {
        return UserRepository.save(newuser);	
    }		
	
	@GetMapping("/users")
	List<user> getAllUsers() {
        return UserRepository.findAll();
    }	
	
	 @GetMapping("/user/{id}")	
	 user getUserById(@PathVariable Long id) {	
		 return UserRepository.findById(id)
				 .orElseThrow(()->new UserNotFoundException(id));	
	 }
	 
	@PutMapping("/user/{id}")
	user updateUser(@PathVariable Long id, @RequestBody user updatedUser) {
			return UserRepository.findById(id)
                .map(user -> {
                    user.setName(updatedUser.getName());
                    user.setUsername(updatedUser.getUsername());
                    user.setEmail(updatedUser.getEmail());
                    return UserRepository.save(user);
                })
                .orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@DeleteMapping("user/{id}")
	 String deleteuser(@PathVariable Long id) {
		if(!UserRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		UserRepository.deleteById(id);
		return "User with id = " + id + " deleted";
	}
}
