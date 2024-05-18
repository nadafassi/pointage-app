import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import {PointageComponent } from 'src/app/pointage/pointage.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ptg',
  templateUrl: './add-edit-ptg.component.html',
  styleUrls: ['./add-edit-ptg.component.css']
})
export class AddEditPtgComponent implements OnInit {
myDate=Date.now()

  constructor(private service:SharedService) { }
  PointagesList:any=[];
  @Input() ptg:any;
  PointageId:string;
  Timeint:Date;
  Timeout:Date;
  Employee:string;

  ngOnInit(): void {
    this.refreshPtgList();
    this.PointageId=this.ptg.PointageId;
    this.Timeint=this.ptg.Timeint.Type;
    this.Timeout=this.ptg.Timeout.Type;
    this.Employee=this.ptg.EmployeeName;

  }

refreshPtgList(){
    this.service.GetAllEmployeeNames().subscribe(data=>{this.PointagesList=data;
    });
  }
  addPointage() {

    var val={

    PointageId:this.PointageId,
    Timeint:this.Timeint,
    Timeout:this.Timeout,
    Employee:this.Employee
    };

    this.service.addPointage(val).subscribe(res=>{alert(res.toString());});

  }

}

