import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit{
    public title:string;
    constructor(public auth: AuthService){
        this.title = 'Bienvenido a RoleMaster'
    }

    ngOnInit(){
        console.log('home.componente cargado correctamente');
    }
}
