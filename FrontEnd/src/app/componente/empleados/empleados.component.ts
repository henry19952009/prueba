import { Component, OnInit } from '@angular/core';
import { SEmpleadoService } from 'src/app/services/sempleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadoService: SEmpleadoService ) { }

  ngOnInit(): void {
    this.empleadoService.obtenerEmpleado();
  
  }
  
  
}
