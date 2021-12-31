import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tc } from 'src/app/models/REmpleados';
import { SEmpleadoService } from 'src/app/services/sempleado.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  le!: number;//bariable de deducciones
  CA!: string;//variable de datos desde el componente empleado
  Mjunior:number=5000000;
  liquidar: tc;
  bonoJunior1:number=0;
  
  
  constructor(public empleado: SEmpleadoService, public toastr:ToastrService) { }

  ngOnInit(): void {
    this.empleado.obtenerEmpleado();
  }
  eliminarEmpleado(id:number){
    if(confirm('esta seguro que quiere eliminar este empleado')){
      this.empleado.eliminarEmpleado(id).subscribe(data =>{
        this.toastr.warning('registro eliminado')
        this.empleado.obtenerEmpleado();
      } )
    }
}
  editar(Empleado: tc){
    this.empleado.actualizarEmpleado(Empleado);
 /* } codigo en desarrollopara implementar
  formula(){
   var liquidar= this.empleado.list
   for(var i of liquidar){
    if (liquidar){console.log(i)
      if(i.categoriaEmpleado="junior"){
       i.sueldo=this.bonoJunior1;
       
       return i;
      }else{
        return null;
      }
    }else{
      return null}
      
   } 
    if(this.le){
      if(this.le>=this.Mjunior){
        switch(true){
          case this.Mjunior<6000000 :
              let bonoJunior1:number=300000;
              this.bonoJunior1=bonoJunior1
              break;
          case this.Mjunior<7000000 && this.Mjunior>=6000000 :
              let bonoJunior2:number=500000;
              return bonoJunior2
              break;
          case  this.Mjunior>=7000000:
            let bonoJunior3:number=600000;
              return bonoJunior3
              break;
          default:
             return 0;  
        }
        }else{
          return 0
      }
    }else{
      return 0;
    }
    return liquidar;*/
}
}
