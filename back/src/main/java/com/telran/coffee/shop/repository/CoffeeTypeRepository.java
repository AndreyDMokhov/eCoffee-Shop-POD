package com.telran.coffee.shop.repository;

import com.telran.coffee.shop.model.entity.CoffeeType;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CoffeeTypeRepository extends JpaRepository<CoffeeType, Long> {

}
