import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:5000/api";
readonly photoUrl="http://localhost:5000/Photos";

  constructor(private http:HttpClient) { }


  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }
  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepatmentNames');
  }

  getCngList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Conge');
  }
  addConge(val:any){
    return this.http.post(this.APIUrl+'/Conge',val);
  }
  updateConge(val:any){
    return this.http.put(this.APIUrl+'/Conge',val);
  }
  deleteConge(val:any){
    return this.http.delete(this.APIUrl+'/Conge/'+val);
  }
  getPtgList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Pointage');
  }
  addPointage(val:any){
    return this.http.post(this.APIUrl+'/Pointage',val);
  }
  Pointageout(s:any){
    console.log(s);
    return this.http.put(this.APIUrl+'/Pointage?PointageId='+s,s);
  }
  GetAllEmployeeNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Pointage/GetAllEmployeeNames');
  }
  GetNbrName():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Pointage/GetNbrName');
  }

}
