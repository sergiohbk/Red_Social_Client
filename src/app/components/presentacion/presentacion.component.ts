import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'presentacion',
    templateUrl: './presentacion.component.html',
    styleUrls: ['./presentacion.component.css'],    
})

export class PresentacionComponent implements OnInit{
    public title:string;
    constructor(){
        this.title = 'Bienvenido a RoleMaster'
    }

    ngOnInit(){
        console.log('presentacion.componente cargado correctamente');
    }
}