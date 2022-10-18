import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { UserService } from './user.service';

export interface Food {
  name: string,
  calories: number,
  price: number
}

export interface FoodState {
  food: Food[],
  hasUserPromotion: boolean | null
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodState = new BehaviorSubject<FoodState>({
    food: [
      {
        name: 'Pizza',
        calories: 2000,
        price: 40
      },
      {
        name: 'Schnitzel',
        calories: 1500,
        price: 140
      }
    ],
    hasUserPromotion: null
  })
  readonly foodState$ = combineLatest({
    foodState: this.foodState.asObservable(),
    user: this.userService.user$
  }).pipe(
    map(({foodState, user}) => {
      return {
        food: foodState.food,
        hasUserPromotion: user.age < 18
      } as FoodState
    })
  );

  constructor(
    private userService: UserService
  ) { }
}
