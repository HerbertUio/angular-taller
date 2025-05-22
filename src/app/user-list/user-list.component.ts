import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../service/service.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit  {

  private userService = inject(UserService);
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      users => {console.log(users);})
  }
}
