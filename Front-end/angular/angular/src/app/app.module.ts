import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';
import { from } from 'rxjs';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { CongeComponent } from './conge/conge.component';
import { ShowCngComponent } from './conge/show-cng/show-cng.component';
import { AddEditCngComponent } from './conge/add-edit-cng/add-edit-cng.component';
import { PointageComponent } from './pointage/pointage.component';
import { ShowPtgComponent } from './pointage/show-ptg/show-ptg.component';
import { AddEditPtgComponent } from './pointage/add-edit-ptg/add-edit-ptg.component';
import { CheckoutComponent } from './pointage/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CongeComponent,
    ShowCngComponent,
    AddEditCngComponent,
    PointageComponent,
    ShowPtgComponent,
    AddEditPtgComponent,
    CheckoutComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

