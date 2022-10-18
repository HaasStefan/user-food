import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  readonly user$ = this.userService.user$;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //this.userService.user.next()
  }

  updateUsername(name: string): void {
    this.userService.changeUsername(name);
  }
}
