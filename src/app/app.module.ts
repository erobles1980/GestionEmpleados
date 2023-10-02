import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    AddEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
  //exports:[RouterModule]
})
export class AppModule { }
