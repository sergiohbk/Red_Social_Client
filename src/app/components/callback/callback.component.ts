import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private auth:AuthService, private _userService:UserService) {

  }

  ngOnInit() {
    this.sus();
  }

  sus(){
    this._userService.register().subscribe(response =>{
      console.log(response);
    });
  }

}
