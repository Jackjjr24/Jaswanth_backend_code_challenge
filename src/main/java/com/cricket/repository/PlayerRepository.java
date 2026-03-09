package com.cricket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cricket.entity.*;

public interface PlayerRepository extends JpaRepository<Player, Long> {
	

}
