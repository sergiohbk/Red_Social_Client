import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { Publication } from '../../models/publication';
import { PublicationService } from '../../services/publication.service';
import { Like } from '../../models/like';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    providers: [UserService, PublicationService]
})

export class SidebarComponent implements OnInit {
    public identity;
    public token;
    public stats;
    public url;
    public status;
    public publication: Publication;
    public like: Like;

    miFormulario: FormGroup;

    constructor(
        private _userService: UserService,
        private _publicationService: PublicationService,
        private formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private _router: Router,

    ) {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.stats = this._userService.getStats();
        this.url = GLOBAL.url;
        this.publication = new Publication("", "", "", "", this.identity._id);

        // this.miFormulario = this.formBuilder.group({
        //     text: ['', [Validators.required]]
        //  });
    }

    ngOnInit() {
        console.log("sidebar.component a sido cargado");
    }

    onSubmit(form) {

        // this.publication = new Publication(
        //     "",
        //     this.miFormulario.value.text,
        //     "",
        //     "",
        //     ""
        // );


        console.log(this.publication)
        this._publicationService.addPublication(this.token, this.publication).subscribe(
            response => {
                if (response.publication) {
                    //  this.publication = response.publication;
                    // console.log(this.publication);
                    this.status = 'success';
                    form.reset();
                    //Ponerlo que redireccione a la home.
                    this._router.navigate(['/timeline']);
                } else {
                    this.status = 'error';
                }
            },

            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );

    }

    // OUTPUT
    @Output() sended = new EventEmitter();
    sendPublication(event) {
        console.log(event);
        this.sended.emit({ send: 'true' })
    }

}