package com.cricket.service;


import java.util.List;
import com.cricket.entity.*;

public interface PlayerService {

	Player addPlayer(Player player);
	List<Player> getAllPlayers();
	Player getPlayerById(Long id);
	Player updatePlayer(Long id, Player player);
	void deletePlayer(Long id);
}
