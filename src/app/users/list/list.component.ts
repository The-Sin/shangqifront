import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public allUsers:UserModel[];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.allUsers = this.authService.getUsersData();
  }

}
