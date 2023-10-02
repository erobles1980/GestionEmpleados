import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {
  form: FormGroup;
  id: string;
  operacion: string = 'Agregar ';
  loading: boolean = false;
  
  constructor(private empleadoService: EmpleadoService, 
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      departamento: ['', Validators.required],
      sueldo: ['', Validators.required]
    }) 
    this.id = String(aRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
  }




  ngOnInit(): void {
    if (this.id.length > 4) {
      // Es editar
      console.log(this.id.length)
      this.operacion = 'Editar ';
      this.getEmpleado(this.id);
    }//else this.operacion = 'Agregar';

  }

  getEmpleado(id: string) {
    this.loading = true;
    this.empleadoService.getEmpleado(id).subscribe((data: Empleado) => {
      this.loading = false;
      this.form.setValue({
        nombre: data.nombre,
        cargo: data.cargo,
        departamento: data.departamento,
        sueldo: data.sueldo
      })
    })
  }
  /*
    getEmpleado(){
      this.empleadoService.getEmpleado().subscribe({
        res=>{
  
        }
        err=> console.error(err)
      });
    }
    addEmpleado(form: NgForm) {
      this.empleadoService.createEmpleado(form.value).subscribe(
        res => {
          this.getEmpleados();
          form.reset;
        },
        err => console.error(err)
      );
      }
      */

      addEmpleado() {
        /*  console.log(this.form.value.name);
         console.log(this.form.get('name')?.value); */
    
        const empleado: Empleado = {
          nombre: this.form.value.nombre,
          cargo: this.form.value.cargo,
          departamento: this.form.value.departamento,
          sueldo: this.form.value.sueldo
        }
        this.loading = true;
    
        if (this.id.length > 4) {
          // Es editar 
          console.log(this.id.length)
          empleado._id = this.id;
          this.empleadoService.updateEmpleado(this.id, empleado).subscribe(() => {
            this.toastr.info(`El emeplado ${empleado.nombre} fue actualizado con exito`, 'Empleado actualizado');
            this.loading = false;
            this.router.navigate(['/']);
          })
    
        } else {
          // Es agregagar
          
          this.operacion="Agregar"
          this.empleadoService.createEmpleado(empleado).subscribe(() => {
            this.toastr.success(`El Empleado ${empleado.nombre} fue registrado con exito`, 'data registrada');
            this.loading = false;
            this.router.navigate(['/']);
          })
        }
    
    
    
    
      }

}
