import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './service/home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './service/login/login.component';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';

export const appRouters: Routes = [

  { path : 'home', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : '', component : LoginComponent},
  { path : 'userList', component : UsuarioComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
