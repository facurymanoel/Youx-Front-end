import { estado } from './../../../model/estado';
import { User } from './../../../model/user';
import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    
  students: Array<User>;

  estados: Array<estado>;

  constructor(private usuarioService: UsuarioService) { 

  }

  ngOnInit(): void {
      this.usuarioService.getStudentList().subscribe(data => {
         this.students = data;
         
      });
  }

}
