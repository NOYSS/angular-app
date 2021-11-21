import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.GetUsers().subscribe(res => {
      console.log(res);
      this.Users = res;
    })
  }

}
