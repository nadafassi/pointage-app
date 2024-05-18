import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-ptg',
  templateUrl: './show-ptg.component.html',
  styleUrls: ['./show-ptg.component.css']
})
export class ShowPtgComponent implements OnInit {
  constructor( private service:SharedService) { }
public PointagesList:any=[];
   ModalTitle:string;
   ActivateAddEditPtgComp:boolean=false;
   ActivateAddEdit:boolean=false;
   ptg:any;


   ngOnInit(): void {this.refreshPtgList();
   }
   addClick(){
   this.ptg={
     PointageId:0,
     Timeint:"",
     Timeout:"",
     Employee:"",
     Matric:"",
   }
   this.ModalTitle="Add ";
   this.ActivateAddEditPtgComp=true;
   }

   Pointageout(s){

   // var rPointage: string = "this.APIUrl+'/Pointage?PointageId="+s;  console.log(rPointage);
   this.service.Pointageout(s).subscribe(res=>{alert(res.toString());});
  }
   addClickcheckout(){
    this.ptg={
      PointageId:0,
      Timeint:"",
      Timeout:"",
      Employee:"",
      Matric:"",

    }
    this.ModalTitle="Add ";
    this.ActivateAddEdit=true;
    }
   closeClick(){
    this.ActivateAddEditPtgComp=false;

    this.refreshPtgList();
  }


  refreshPtgList(){
    this.service.getPtgList().subscribe(data=>{this.PointagesList=data;
    });
  }


}

