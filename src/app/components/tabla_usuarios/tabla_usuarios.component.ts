import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla_usuarios.component.html',
  styleUrls: ['./tabla_usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => {console.log(users); this.users = users});
  }
}
