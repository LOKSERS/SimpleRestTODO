package com.Network.Society.Repos;

import com.Network.Society.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepo extends JpaRepository<User,String> {

}
