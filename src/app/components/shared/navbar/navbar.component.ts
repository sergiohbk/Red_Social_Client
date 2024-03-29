import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../app.component.css'],
  styles: []
})
export class NavbarComponent implements OnInit, DoCheck{
  public title: string;
  public identity;
  public url:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private auth:AuthService
  ){
    this.title = "RoleMaster";
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    //this.identity = this._userService.getIdentity();
  }
  //refrescar menus de la pantalla cuando nos logueamos.
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logOut(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/login']); //Redirecciona a la página Home.
  }
}
