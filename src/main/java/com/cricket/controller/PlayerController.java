package com.cricket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.cricket.entity.*;
import com.cricket.service.*;

@RestController
@RequestMapping("/api/players")
public class PlayerController {
	
	@Autowired
	private PlayerService service;
	
	@GetMapping
	public List<Player> getPlayers(){
		return service.getAllPlayers();
	}
	
	@PostMapping
	public Player addPlayer(@RequestBody Player player) {
		return service.addPlayer(player);
	}
	
	@GetMapping("/{id}")
	public Player getPlayer(@PathVariable Long id) {
		return service.getPlayerById(id);
	}
	
	@PutMapping("/{id}")
	public Player updatePlayer(@PathVariable Long id, @RequestBody Player player) {
		return service.updatePlayer(id, player);
	}
	
	@DeleteMapping("/{id}")
	public String deletePlayer(@PathVariable Long id) {
		service.deletePlayer(id);
		return "Player deleted successfully";
	}

}
