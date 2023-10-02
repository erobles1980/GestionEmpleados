import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL_API = 'http://localhost:3000/api/empleados';
  constructor(private http: HttpClient) {  }
  empleados: Empleado[] = [];

  selectedEmpleado: Empleado = {
    nombre: '',
    cargo: '',
    departamento: '',
    sueldo: 0

  }

 

  getEmpleados() {
    return this.http.get<Empleado[]>(this.URL_API);
  }

  createEmpleado(empleado: Empleado):Observable<void> {
    return this.http.post<void>(this.URL_API, empleado);
  }

  deleteEmpleado(id: string) {
    const ruta = this.URL_API + "/" + id;
    return this.http.delete(ruta);
  }

  getEmpleado(id: string): Observable<Empleado> {
    const ruta = this.URL_API + "/" + id;
    return this.http.get<Empleado>(ruta);
  }

  updateEmpleado(id: string, data: Empleado): Observable<void> {
    const ruta = this.URL_API + "/" + id;
    return this.http.put<void>(ruta, data);
  }

}
