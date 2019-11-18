import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { Publication } from '../../models/publication';
import { PublicationService } from '../../services/publication.service';
import { Like } from '../../models/like';
import { AvatarModule } from 'ngx-avatar';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public identity;
  public token;
  public stats;
  public url;
  public status;
  public like: Like;


  constructor(
      private _userService: UserService,
      private _route: ActivatedRoute,
      private _router: Router,

  ) {
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.stats = this._userService.getStats();
      this.url = GLOBAL.url;
  }

  ngOnInit() {
      console.log("UserProfile.component a sido cargado");
  }

  onSubmit() {

  }

}
