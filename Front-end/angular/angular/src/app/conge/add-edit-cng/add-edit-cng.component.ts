import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,Input} from '@angular/core';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cng',
  templateUrl: './add-edit-cng.component.html',
  styleUrls: ['./add-edit-cng.component.css']
})
export class AddEditCngComponent implements OnInit {
  constructor(private service:SharedService) { }
  @Input() cng:any;
  CongeId:string;
  Type:string;
  Matric:string;
  Employee:string;
  DateDebut:string;
  DateFin:string;
  Duree:string;


  ngOnInit(): void {
    this.CongeId=this.cng.CongeId;
    this.Type=this.cng.Type;
    this.Employee=this.cng.Employee;
    this.Matric=this.cng.Matric;
    this.DateDebut=this.cng.DateDebut;
    this.DateFin=this.cng.DateFin;
    this.Duree=this.cng.Duree;
  }


  addConge() {
    var val={
    CongeId:this.CongeId,
    Type:this.Type,
    Employee:this.Employee,
    Matric:this.Matric,
    DateDebut:this.DateDebut,
    DateFin:this.DateFin,
    Duree:this.Duree

    };
    this.service.addConge(val).subscribe(res=>{alert(res.toString());});

  }
  updateConge(){
    var val={
    CongeId:this.CongeId,
     Type:this.Type,
     Employee:this.Employee,
     Matric:this.Matric,
      DateDebut:this.DateDebut,
     DateFin:this.DateFin,
     Duree:this.Duree
    };
    this.service.updateConge(val).subscribe(res=>{ alert(res.toString());});

                   }
}

