import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Publication } from '../../models/publication';
import { GLOBAL } from '../../services/global';
import { PublicationService } from '../../services/publication.service';
declare var $: any;



@Component({
    selector: 'publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.css'],
    providers: [UserService, PublicationService]
})

export class PublicationsComponent implements OnInit {
    public title: string;
    public identity;
    public token;
    public url: string;
    public status: string;
    public page;
    public pages;
    public itemPerPage;
    public total;
    public publications: Publication[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _publicationService: PublicationService
    ) {
        this.title = 'publicaciones';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.page = 1;
    }

    ngOnInit() {
        console.log('publicaciones cargado correctamente');
        this.getPublications(this.page);
    }

    getPublications(page, adding = false) {
        this._publicationService.getPublications(this.token, page).subscribe(
            response => {
                if (response.publications) {
                    this.total = response.total_items;
                    this.pages = response.pages;
                    this.itemPerPage = response.items_per_page;

                    if(!adding){
                        this.publications = response.publications;
                    }else{
                        var arrayA = this.publications;
                        var arrayB = response.publications;

                        this.publications = arrayA.concat(arrayB);

                        // ANIMAR PUBLICACIONES CUANDO PULSAS BOTON VER MAS PUBLICACIONES
                        // $("html", "body").animate({scrollTop: $('body').prop("scrollHeight")}, 500);
                    }

                    if(page > this.pages){
                        // this._router.navigate(['/home']);
                    }
                }else{
                    this.status = 'error';
                }
            },
            error => {
                var errorMessage = <any>error;
                // console.log(errorMessage);
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );
    }
    
    public noMore = false;
    viewMore(){
        if(this.publications.length == this.total){
            this.noMore = true;
        }else{
            this.page += 1;
        }

        this.getPublications(this.page, true);
    }

}