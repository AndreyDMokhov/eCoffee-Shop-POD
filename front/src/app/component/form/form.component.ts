import {Component, OnInit, ViewChild} from '@angular/core';
import {CoffeeType} from '../../Model/coffee-type';
import {CoffeeShopService} from '../../service/coffee.shop.service';
import {ShowComponent} from '../show/show.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild(ShowComponent)
  showTable: ShowComponent;


  constructor(private coffeeService: CoffeeShopService) {
  }

  ngOnInit() {
  }

  addType(name: string): void {
    if (!name) {
      return;
    }
    this.coffeeService.addCoffeeType({name} as CoffeeType)
      .subscribe((res) => {
        this.showTable.getCoffeeTypes();
      });
  }
}
