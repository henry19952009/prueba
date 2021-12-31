import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { tc } from 'src/app/models/REmpleados';
import { SEmpleadoService } from 'src/app/services/sempleado.service';
import { LiquidarComponent } from '../liquidar/liquidar.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription: Subscription;
  sueldoJ:number= 1800000;
  sueldoS:number= 2500000;
  sueldoM:number= 3200000;
  salud:number= 0.04;
  pension:number= 0.04;
  RL:number=0.0075;
  em: tc={}; //modelo
  idEmpleado:number = 0;
  ventas:number= 0;
  
  public deducciones(){
   
    if(this.form.get('CategoriaEmpleado').value=="junior"){
      let i=this.sueldoJ*this.salud+this.sueldoJ*this.pension+this.sueldoJ*this.RL;
      let r=this.sueldoJ-i
        return r;
    }else if(this.form.get('CategoriaEmpleado').value=="senior"){ 
      let i=this.sueldoS*this.salud+this.sueldoS*this.pension+this.sueldoS*this.RL;
      let r=this.sueldoS-i
        return r;

    }else if(this.form.get('CategoriaEmpleado').value=="master"){
      let i=this.sueldoM*this.salud+this.sueldoM*this.pension+this.sueldoM*this.RL;
      let r=this.sueldoM-i
      
        return r;
    } else{
      
      return 0;
    }
  }
  constructor(private formbuilder:FormBuilder, private empleado: SEmpleadoService,
     private toastr: ToastrService) {
    this.form = this.formbuilder.group({
      id:0,
      Empleado : ['',[Validators.required]],
      Sueldo:[''],
      CategoriaEmpleado:['',[Validators.required]],
      VentasMes:['',[Validators.required,Validators.minLength(6)]]
     
    }
    )
   }

  ngOnInit(): void {
    this.suscription= this.empleado.obtenerEmplead0().subscribe(data =>{
      
      this.em = data;
      console.log(data);
      this.form.patchValue({        
        Empleado:this.em.empleado,
        Sueldo:this.em.sueldo,
        CategoriaEmpleado:this.em.categoriaEmpleado,
        VentasMes:this.em.ventasMes
      });
      this.idEmpleado=this.em.id
      
    } );
  }

  ngOnDestroy() {
      this.suscription.unsubscribe();
  }

  guardarE(){
    
    if(this.idEmpleado===0){
      this.guardarEmpleado();
    }else{
      this.editar();
    }

    }
  
  editar(){
    const Em: tc = {
      id: this.em.id,
      empleado: this.form.get('Empleado').value,
      sueldo: this.form.get('Sueldo').value, 
      ventasMes: this.form.get('VentasMes').value,
      categoriaEmpleado: this.form.get('CategoriaEmpleado').value
      
    };
    this.empleado.actualizar(this.idEmpleado, Em).subscribe(data=>{
      this.toastr.info( this.form.get('Empleado').value, 'registro actualizado')
      this.empleado.obtenerEmpleado();
      this.form.reset();
      this.idEmpleado= 0; 
      console.log(data);
    });
    
  }
  guardarEmpleado(){
    //no hay efecto en el envio a causa de la marca error
    console.log("inicio")
     let Em: tc = {
      
      empleado: this.form.get('Empleado').value,
      sueldo: this.deducciones(), 
      ventasMes: this.form.get('VentasMes').value,
      categoriaEmpleado: this.form.get('CategoriaEmpleado').value
      
    }
    this.empleado.guardarEmpleado(Em).subscribe(data => {
      this.toastr.success( this.form.get('Empleado').value, 'registro adicionado exitosamente')
      this.empleado.obtenerEmpleado();
      this.form.reset();
      console.log(data);
    });
   }
  
}
         
          
        
        
      


