package com.example.Ayudhaya.user;

import com.example.Ayudhaya.Country;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository  extends MongoRepository<User,String> {
}
