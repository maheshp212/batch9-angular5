import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[UsersService]
})
export class ServicesComponent implements OnInit {
  listUsersobj:any;
  constructor(private UsersService: UsersService) { }

  ngOnInit() {

    this.UsersService.listUsers()
    .subscribe((res) =>{
      this.listUsersobj = res.data;
      console.log('###################');
      console.log(res);
    });
  }
}


