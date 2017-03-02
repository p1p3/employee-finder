import { Employee } from './shared/employee.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

  ]
})
export class AppComponent {
  selectedEmployeeId = 0;

  selectEmployee(employee: Employee, event: Event) {
    event.stopPropagation();
    this.selectedEmployeeId = employee.id;
  }

  deSelect() {
    this.selectedEmployeeId = 0;
  }
  
  employees = [new Employee('Felipe Jaramillo Gómez',
    'Developer',
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    1),
  new Employee('Juan David Herrera',
    'Developer',
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    2),
  new Employee('Pablo Díaz',
    'Developer',
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    3),
  new Employee('Carlos Ángulo',
    'Developer',
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    4)];

}
