import { Component, OnInit } from '@angular/core';
import {CoffeeType} from '../../Model/coffee-type';
import {CoffeeShopService} from '../../service/coffee.shop.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  types: CoffeeType[];

  constructor(private coffeeService: CoffeeShopService) { }

  ngOnInit() {
    this.getCoffeeTypes();
  }
  getCoffeeTypes() {
     this.coffeeService.getCoffeeTypes()
       .subscribe(types =>  this.types = types);
  }
}
