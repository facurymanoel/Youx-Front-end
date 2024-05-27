import { Component, OnInit } from '@angular/core';
import { LoginSeviceService } from '../login-sevice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {login: '', senha:''};

  constructor(private loginService: LoginSeviceService){}

  public login(){
     
        this.loginService.login(this.usuario);

  }

  ngOnInit(): void {
  }

}
