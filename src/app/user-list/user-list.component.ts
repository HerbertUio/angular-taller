import { Component, inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../service/service.component';
import { CommonModule } from '@angular/common';



@Pipe({ name: 'genderTransform', standalone: true })
export class GenderTransformPipe implements PipeTransform {
  transform(value: string): string {
    return value === 'M' ? 'Masculino' : 'Femenino';
  }
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, GenderTransformPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit  {
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users: any) => {
        this.users = users;
      },
    }
    );
  }

  users: any[] = [];
  userService = inject(UserService);

}
