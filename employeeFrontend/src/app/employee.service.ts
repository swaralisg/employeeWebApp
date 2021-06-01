import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  createEmployees(employee: any)
  {
 return this.http.post("http://localhost:3000/employees",employee);
  }

  getAllEmployees(){
    return this.http.get("http://localhost:3000/employees");
  }
  
  updateEmployees(employee:any){
    return this.http.put("http://localhost:3000/employees/"+ employee.id,employee);
  }

  deleteEmployees(employee:any){
    return this.http.delete("http://localhost:3000/employees/" + employee.id);
  }

}
