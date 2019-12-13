import {ModuleWithProviders} from '@angular/core';
//Cargamos los modulos de rutas.
import {Routes, RouterModule} from '@angular/router';

//Componentes
// import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.components';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './auth.guard';


//Declaramos la constante appRoutes(su valor nunca cambia) de tipo Routes(objeto).
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: 'gente', component: UsersComponent},
    {path: 'gente/:page', component: UsersComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'perfil/:id', component: ProfileComponent},
    {path: 'callback', component: CallbackComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
