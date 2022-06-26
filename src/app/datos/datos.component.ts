import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  todoList: any = [];

  constructor(private crudHttpService: CrudHttpService) { }
  
  ngOnInit(): void {
    this.listTodos();
  }

  listTodos(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

}
