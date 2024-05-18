import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-cng',
  templateUrl: './show-cng.component.html',
  styleUrls: ['./show-cng.component.css']
})
export class ShowCngComponent implements OnInit {

  constructor( private service:SharedService) { }
 CongesList:any=[];
  ModalTitle:string;
  ActivateAddEditCngComp:boolean=false;
  cng:any;

  ngOnInit(): void {this.refreshCngList();
  }
  addClick(){
  this.cng={
    CongeId:0,
    Type:"",
    Employee:"",
    Matric:"",
    DateDebut:"",
    DateFin:"",
    Duree:""
  }
  this.ModalTitle="Add Conge";
  this.ActivateAddEditCngComp=true;
  }
  editClick(item)
  {this.cng=item;
  this.ModalTitle="Edit Conge";
  this.ActivateAddEditCngComp=true;
}
deleteClick(item){
if(confirm('Are you sure ??')){
  this.service.deleteConge(item.CongeId).subscribe(data=>{
    alert(data.toString());
    this.refreshCngList();
  })
}


}


  closeClick(){
    this.ActivateAddEditCngComp=false;
    this.refreshCngList();
  }


  refreshCngList(){
    this.service.getCngList().subscribe(data=>{this.CongesList=data;
    });
  }
}
