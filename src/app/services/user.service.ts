import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { FoodService, FoodState } from './food.service';

interface User {
  userName: string,
  email: string,
  age: number,
  favouriteFood: string | null
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<User>({
    userName: 'Max Mustermann',
    email: 'max.mustermann@gmail.com',
    age: 30,
    favouriteFood: null
  });

  readonly user$ = this.user.asObservable();
  // circular dependency!!!!
  // readonly user$: Observable<User> = combineLatest({
  //   user: this.user.asObservable(),
  //   foodState: this.foodService.foodState$
  // }).pipe(
  //   map(({user, foodState}) => {
  //     return {
  //       ...user,
  //       favouriteFood: (foodState as FoodState).food[0].name
  //     } as User
  //   })
  // );
// 
  // constructor(
  //   private foodService: FoodService
  // ) { }

  changeUsername(name: string): void {
    let currentUser = this.user.getValue();
    let updatedUser = {
      ...currentUser,
      userName: name
    };
    this.user.next(updatedUser);
  }
}
