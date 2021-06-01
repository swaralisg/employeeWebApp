import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    console.log("ngoninit is working!");
    this.getLatestEmployee();
  }

// Declaring the variables 
  allEmployees:any;
  isEdit=false;
  isUpdateButtonClicked=false;
  isFillInfoStatement=false;
  isSaveButtonClicked=false;
  userDummyObject:any=
  {
    fullname:'',
    address:'',
    phonenumber:'',
    position:'0',
    id:''
  }


// Function to reset the form 
clearFields(){
 
this.userDummyObject=
{
  fullname:'',
  address:'',
  phonenumber:'',
  position:'0',
  id:''
}
  this.isEdit=false;
  this.isSaveButtonClicked=false;
  this.isUpdateButtonClicked=false;
 
 
}


// Funtion to save the employee details entered by the user 
addEmployee(formObject: any){

  
  this.isSaveButtonClicked=true;
  console.log("addUser function is working!");
  console.log("New employee has been added",formObject);
  this.empService.createEmployees(formObject).subscribe((response)=>{
    console.log("New user has been added");

    this.getLatestEmployee();
    
  })
  this.userDummyObject=
{
  fullname:'',
  address:'',
  phonenumber:'',
  position:'',
  id:''
}
}


// Function to fetch the list of employees in the db
getLatestEmployee(){
  this.empService.getAllEmployees().subscribe((response)=>
  {
this.allEmployees=response;
  })

 
}

// Function to edit an already existing employee
editEmployee(formObject:any){
  this.isEdit=true;
  this.userDummyObject=formObject;
  this.isUpdateButtonClicked=false;
  this.isSaveButtonClicked=false;
}


// Function to update the changes made to an already existing employee
updateEmployee(){
  this.isUpdateButtonClicked=!this.isUpdateButtonClicked;
  this.isEdit=!this.isEdit;
  this.empService.updateEmployees(this.userDummyObject).subscribe(()=>{
    this.getLatestEmployee();

    
  })
  this.userDummyObject=
  {
    fullname:'',
    address:'',
    phonenumber:'',
    position:'',
    id:''
  }
}


// Function to delete an employee from the list 
deleteEmployee(employee: any){
  this.clearFields();
  this.empService.deleteEmployees(employee).subscribe(()=>{
    this.getLatestEmployee();
 
    
  })
}


}
