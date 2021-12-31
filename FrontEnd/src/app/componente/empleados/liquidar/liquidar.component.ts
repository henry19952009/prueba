import { Component, OnInit } from '@angular/core';
import { SEmpleadoService } from 'src/app/services/sempleado.service';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { Subscription } from 'rxjs';

import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-liquidar',
  templateUrl: './liquidar.component.html',
  styleUrls: ['./liquidar.component.css']
})
export class LiquidarComponent implements OnInit {
  
  constructor(private empleado: SEmpleadoService,
    private toastr:ToastrService
    ) {

   }
  
  ngOnInit(): void {
       
    
  }
  
  
  

}
