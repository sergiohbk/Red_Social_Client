// Permite definir los servicios e inyectarlos en otra clase
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Para recojer la respuesta que nos devuelve el api
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { User } from '../models/user';


@Injectable()
export class UserService {
    public url: string;
    public identity: any;
    public token: string;

    constructor(public _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    //Petición al backend
    register(): Observable<any> {
        // Para convertirlo en un string json
        //let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'Application/json');

        return this._http.get(this.url + 'get-all-information', { headers: headers });
    }

    signup(): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'Application/json');

        return this._http.post(this.url + 'login', { headers: headers });
    }

    getSelfUserData(): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'Application/json');

        return this._http.get(this.url + 'getSelfUserData', { headers: headers });
    }

    getIdentity() {
        //Parseamos el identity (datos de usuario) en un objeto json.
        let identity = JSON.parse(localStorage.getItem('identity'));

        if (identity != "undefined") {
            this.identity = identity;
        } else {
            this.identity = null;
        }
        return this.identity;
    }

    getToken() {
        //Obtenemos el token
        let token = localStorage.getItem('token');

        if (token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
    }

    getStats(){
        let stats = JSON.parse(localStorage.getItem('stats'));

        if (stats != "undefinded") {
            stats = stats
        } else {
            stats = null;
        }

        return stats;
    }

    getCounters(userId = null): Observable<any> {
        let headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', this.getToken());

        if (userId != null) {
            return this._http.get(this.url + 'counters/' + userId, { headers: headers });
        } else {
            return this._http.get(this.url + 'counters/', { headers: headers });
        }
    }

    // Actualizar mis datos de usuario (cambiarlos).
    updateUser(user:User): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', this.getToken());

            return this._http.put(this.url + 'update-user/' + user._id, params,  { headers: headers });
    }

    //Sacar todos usuarios
    getUsers(page = null):Observable<any>{
        let headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', this.getToken());

        return this._http.get(this.url + 'users/' + page, { headers: headers });
    }

    //Sacar un usuario
    getUser(id:any):Observable<any>{
        let headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', this.getToken());

        return this._http.get(this.url + 'user/' + id, { headers: headers });
    }
}
