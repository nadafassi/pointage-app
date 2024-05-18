import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,Input} from '@angular/core';
import { DepartmentComponent } from 'src/app/department/department.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
    @Input() emp:any;
    EmployeeId:string;
    EmployeeName:string;
    EmployeePrenom:string;
    Department:string;
    DateOfJoining:string;
    PhotoFileName:string;
    PhotoFilePath:string;
    Matric:string;
    CIN:string;



    DepartmentsList:any[];
  ngOnInit(): void {
      this.loadDepartmentList();
  }
  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>
    {

      this.DepartmentsList=data;
      this. EmployeeId=this.emp.EmployeeId;
      this. EmployeeName=this.emp.EmployeeName;
      this.EmployeePrenom=this.emp.EmployeePrenom;
      this.Department=this.emp.Department;
      this.DateOfJoining=this.emp.DateOfJoining;
      this.Matric=this.emp.Matric;
      this.CIN=this.emp.CIN;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFilePath=this.service.photoUrl+this.PhotoFileName;

    });
  }

  addEmployee(){
    var val={EmployeetId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      EmployeePrenom:this.EmployeePrenom,
      Department:this.Department,
      DateOfJoinning:this.DateOfJoining,
      Matric:this.Matric,
      CIN:this.CIN,
      PhotoFileName:this.PhotoFileName

      };
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateEmployee(){
    var val={
      EmployeetId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      EmployeePrenom:this.EmployeePrenom,
      CIN:this.CIN,
      Department:this.Department,
      DateOfJoinning:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName,
    };
    this.service.updateEmployee(val).subscribe(res=>{ alert(res.toString());});
        }



  uploadPhoto(event){
           var file=event.target.files[0];
           const formData:FormData=new FormData();
           formData.append('uploadedFile',file,file.name);

           this.service.UploadPhoto(formData).subscribe((data:any)=>
         { this.PhotoFileName=data.toString();
          this.PhotoFilePath=this.service.photoUrl+this.PhotoFileName;
        } );



      }
}
