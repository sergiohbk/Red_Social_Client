import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})

export class LoginComponent implements OnInit {
    public title: string;
    public user: User;
    public status: string;
    public identity;
    public token;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Identificate';
        this.user = new User("",
            "",
            "",
            "",
            "",
            "",
            "ROLE_USER",
            null);
    }

    ngOnInit() {
        console.log('Componente de login cargado...');
    }

    onSubmit() {
        //Loguear al usuario y conseguir sus datos.
        this._userService.signup(this.user).subscribe(
            response => {
                this.identity = response.user;

                if (!this.identity || !this.identity._id) {
                    this.status = 'error';
                } else {
                }
                //Persistir datos de usuario (mantener la sesión).
                localStorage.setItem('identity', JSON.stringify(this.identity));

                //Conseguir el token
                this.getToken();

            },
            error => {
                var errorMessage = <any>error;
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );
    }

    getToken() {
        this._userService.signup(this.user, 'true').subscribe(
            response => {
                this.token = response.token;

                console.log(this.token);

                if (this.token.length <= 0) {
                    this.status = 'error';
                } else {
                }
                //Persistir el token del usuario
                localStorage.setItem('token', this.token);

                //Conseguir los contadores o estadisticas del usuario
                this.getCounters();

            },
            error => {
                var errorMessage = <any>error;
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );
    }

    getCounters(){
        this._userService.getCounters().subscribe(
            response => {
                localStorage.setItem('stats', JSON.stringify(response));
                this.status = 'success';
                this._router.navigate(['/home']); //Redirecciona a la página Home.
            },

            error => {
                console.log(<any>error);
            }
        )
    }
}