package com.cricket.service;

import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cricket.entity.*;
import com.cricket.repository.*;
import com.cricket.exception.*;

@Service
public class PlayerServiceImpl implements PlayerService{
	
	@Autowired
	private PlayerRepository repository;
	
	@Override
	public Player addPlayer(Player player) {
		return repository.save(player);
	}
	
	@Override
	public List<Player> getAllPlayers() {
		return repository.findAll();
	}
	
	@Override
	public Player getPlayerById(Long id) {
		return repository.findById(id).orElseThrow(() -> new PlayerNotFoundException("Player not found"));
		
	}
	
	@Override
	public Player updatePlayer(Long id, Player player) {
		
		Player old = getPlayerById(id);
		old.setPlayerName(player.getPlayerName());
		old.setJerseyNumber(player.getJerseyNumber());
		old.setRole(player.getRole());
		old.setTotalMatches(player.getTotalMatches());
		old.setTeamName(player.getTeamName());
		old.setCountry(player.getCountry());
		old.setDescription(player.getDescription());
		
		return repository.save(old);
	}
	
	@Override
	public void deletePlayer(Long id) {
		repository.deleteById(id);
	}

}
