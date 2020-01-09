import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { AvatarModule } from 'ngx-avatar';

// appRoutingProviders
import { routing } from './app.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.components';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PublicationsComponent } from './components/publications/publications.component';
// import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BoxPublicationComponent } from './components/box-publication/box-publication.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { RolesMasActivosComponent } from './components/roles-mas-activos/roles-mas-activos.component';
import { CallbackComponent } from './components/callback/callback.component';

import {AuthService} from './services/auth.service';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { SalasComponent } from './components/salas/salas.component';
import { ChatComponent } from './components/chat/chat.component';

//Metemos los componentes para poder usarlos.
@NgModule({
  declarations: [
    AppComponent,
    // PresentacionComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserEditComponent,
    UsersComponent,
    SidebarComponent,
    TimelineComponent,
    PublicationsComponent,
    ProfileComponent,
    NavbarComponent,
    UserProfileComponent,
    BoxPublicationComponent,
    ListaPersonajesComponent,
    RolesMasActivosComponent,
    CallbackComponent,
    SalasComponent,
    ChatComponent


  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MomentModule,
    AvatarModule,
    RouterModule
  ],
  exports:[
      RouterModule
  ],
  providers: [
    // appRoutingProviders
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
