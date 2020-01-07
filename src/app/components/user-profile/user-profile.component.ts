import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { Publication } from '../../models/publication';
import { PublicationService } from '../../services/publication.service';
import { Like } from '../../models/like';
import { AvatarModule } from 'ngx-avatar';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public identity: any;
  public token: any;
  public stats: any;
  public url: string;
  public status: any;
  public like: Like;
  public userData: User;


  constructor(
      private _userService: UserService,
      private _route: ActivatedRoute,
      private _router: Router,
      private auth:AuthService

  ) {
      this.url = GLOBAL.url;
      this.userData = new User(
        "",
        "",
        "",
      );
  }

  ngOnInit() {
      this.getTheProfileData();
  }

  getTheProfileData(){
    this._userService.getSelfUserData().subscribe(user =>{
      this.userData._id = user._id;
      this.userData.image = user.image;
      this.userData.name = user.name;
    });
  }

  onSubmit() {

  }

}
