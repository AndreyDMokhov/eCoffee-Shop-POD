package com.telran.coffee.shop.service;

import com.telran.coffee.shop.model.web.CoffeeTypeWeb;

import java.util.List;

public interface CoffeeTypeService {

     CoffeeTypeWeb saveCoffeeTypeToDB(CoffeeTypeWeb coffeeTypeWeb);
     List<CoffeeTypeWeb> getAllCoffeeType();
}
