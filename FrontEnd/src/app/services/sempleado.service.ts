import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tc } from '../models/REmpleados';

@Injectable({
  providedIn: 'root'
})
export class SEmpleadoService {
//conexion api
  myAppUrl= 'https://localhost:44358/';
  myApiUrl = 'api/tc/';
  list!: tc[];
  

  private actualizarFormulario= new BehaviorSubject<tc>({} as any);

  constructor(private http: HttpClient) { }

  guardarEmpleado(empleado: tc): Observable<tc>{
   return this.http.post<tc>(this.myAppUrl + this.myApiUrl, empleado)
  }
  obtenerEmpleado(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
            .then(data =>{
              this.list = data as tc[];
                console.log(data);
            })
  }
  eliminarEmpleado(id: number):Observable<tc>{
   return this.http.delete<tc>(this.myAppUrl + this.myApiUrl + id);
  }//prueba
  actualizarEmpleado(Empleado: tc){
    this.actualizarFormulario.next(Empleado);
  }
  

  obtenerEmplead0():Observable<tc>{
    return this.actualizarFormulario.asObservable();
  }
  actualizar(id: number, empleado:tc ): Observable<tc>{
    return this.http.put<tc>(this.myAppUrl+this.myApiUrl+ id, empleado)
  }
}
