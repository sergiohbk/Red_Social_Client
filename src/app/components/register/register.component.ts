import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//importamos los modelos
import { User } from '../../models/user';




@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    // Cargamos los servicios que deseemos
    providers: [UserService]
})

export class RegisterComponent implements OnInit {
    public title: string;
    public user: User;
    public status: string;

    miFormulario: FormGroup;
    enviado = false;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,

        private formBuilder: FormBuilder


    ) {
        this.title = 'Registrate';
      }

    ngOnInit() {

    }
}
