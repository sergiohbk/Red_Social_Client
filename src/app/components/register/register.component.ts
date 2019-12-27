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


        // VALIDACIONES
        this.miFormulario = this.formBuilder.group({
            nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]
            ],
            nick: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]
            ],
            correo: ['', [Validators.required, Validators.email]
            ],
            password: ['',
                [Validators.required, Validators.minLength(8)]
            ],
            password2: ['',
                Validators.required
            ],
            condiciones: [false, Validators.requiredTrue],
        }, { validators: this.sonIguales('password', 'password2') });

    }

    ngOnInit() {

    }

    onsubmit() {
        this.enviado = true;

        this.user = new User(
            "",
            this.miFormulario.value.nombre,
            this.miFormulario.value.nick,
            this.miFormulario.value.correo,
            this.miFormulario.value.password,
            "",
            "",
            this.miFormulario.value.condiciones
        );

        this._userService.register().subscribe(
            response => {
                if (response.user && response.user._id) {
                    //  console.log(response.user);
                    this.status = 'success';
                    // this._router.navigate(['/home']);
                    // form.reset();
                } else {
                    console.log(response);
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error);
            }
        )
    }

    get f() { return this.miFormulario.controls; }

    sonIguales(campo1: string, campo2: string) {
        return (group: FormGroup) => {

            let pass1 = group.controls[campo1].value;
            let pass2 = group.controls[campo2].value;

            if (pass1 === pass2)
                return null;

            return { sonIguales: true };
        };
    }
}
