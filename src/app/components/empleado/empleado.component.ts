import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
 
  loading: boolean = false;

  constructor(public empleadoService:EmpleadoService,private toastr: ToastrService) {  }
  
  empleado: Empleado[] = [];
  

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados()
  {
    this.loading = true;
    this.empleadoService.getEmpleados().subscribe(
      res=>{
      this.empleadoService.empleados=res;
      this.loading=false;
      },
      err=>console.error(err) 
      );
    }
  
  /*addEmpleado(form:NgForm){
    this.empleadoService.createEmpleado(form.value).subscribe(
      res=>{
        this.getEmpleados();
        form.reset;
      },
      err=>console.error(err)
    );
  }*/
  
  delEmpleado(id: string) {
    this.loading = true;
    this.empleadoService.deleteEmpleado(id).subscribe(() => {
      this.getEmpleados();
      this.toastr.warning('El empleado fue eliminado con exito', 'Empleado eliminado');
    })
  }

}
