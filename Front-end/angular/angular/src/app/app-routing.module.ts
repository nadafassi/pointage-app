import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent }from './employee/employee.component';
import {DepartmentComponent }from './department/department.component';
import {CongeComponent }from './conge/conge.component';
import {PointageComponent }from './pointage/pointage.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'department',component:DepartmentComponent},
  {path:'conge',component:CongeComponent},
  {path:'pointage',component:PointageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
