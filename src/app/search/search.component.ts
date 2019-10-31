import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string = '';

  enableML = false;

  employees: any[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onSearch() {


    this.employeeService.getEmployeeByName(this.searchText, this.enableML)
    .subscribe((data: {})=>{
      console.log(data['response']);
      this.employees = data['response'];
    })  
  }

}
