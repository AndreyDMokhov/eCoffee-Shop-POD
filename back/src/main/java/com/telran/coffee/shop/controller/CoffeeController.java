package com.telran.coffee.shop.controller;

import com.telran.coffee.shop.model.web.CoffeeTypeWeb;
import com.telran.coffee.shop.service.CoffeeTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CoffeeController {

    @Autowired
    private CoffeeTypeService coffeeTypeService;

    @PostMapping("/coffee-type")
    public CoffeeTypeWeb inputCoffeeTypes(@RequestBody CoffeeTypeWeb coffeeRequest) {

        return coffeeTypeService.saveCoffeeTypeToDB(coffeeRequest);
    }

    @GetMapping("/coffee-type")
    public List<CoffeeTypeWeb> getCoffeeTypes() {

        return coffeeTypeService.getAllCoffeeType();
    }
}
