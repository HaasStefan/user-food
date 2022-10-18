import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  readonly foodState$ = this.foodService.foodState$;

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
  }

  updatePizza(pizza: string) {
    console.log(pizza);
  }

}
