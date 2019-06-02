package com.telran.coffee.shop.service.impl;

import com.telran.coffee.shop.model.entity.CoffeeType;
import com.telran.coffee.shop.model.web.CoffeeTypeWeb;
import com.telran.coffee.shop.repository.CoffeeTypeRepository;
import com.telran.coffee.shop.service.CoffeeTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CoffeeTypeServiceImpl implements CoffeeTypeService {

    @Autowired
    private CoffeeTypeRepository coffeeTypeRepository;

    @Override
    public CoffeeTypeWeb saveCoffeeTypeToDB(CoffeeTypeWeb coffeeTypeWeb) {
        if (coffeeTypeWeb == null) {
            return null;
        }

        CoffeeType coffeeType = coffeeTypeRepository.save(CoffeeType.builder()
                .coffeeTypeName(coffeeTypeWeb.getName())
                .build());

        return CoffeeTypeWeb.builder()
                .name(coffeeType.getCoffeeTypeName())
                .build();
    }

    @Override
    public List<CoffeeTypeWeb> getAllCoffeeType() {

        List<CoffeeTypeWeb> coffeeTypeWebs = new ArrayList<>();
        List<CoffeeType> coffeeTypes = coffeeTypeRepository.findAll();

        for (CoffeeType coffeeType : coffeeTypes) {

            coffeeTypeWebs.add(CoffeeTypeWeb.builder()
                    .name(coffeeType.getCoffeeTypeName())
                    .build());
        }

        return coffeeTypeWebs;
    }
}
