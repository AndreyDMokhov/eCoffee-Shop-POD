package com.telran.coffee.shop.model.entity;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
@Table(name = "COFFEE_TYPE")
public class CoffeeType extends CoffeeBaseEntity {

    @Column(name = "COFFEE_TYPE_NAME")
    private String coffeeTypeName;
}
