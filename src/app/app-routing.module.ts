import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';

const routes: Routes = [
  { path: '', component: EmpleadoComponent },
  { path: 'add', component: AddEmpleadoComponent },
  { path: 'edit/:id', component: AddEmpleadoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
