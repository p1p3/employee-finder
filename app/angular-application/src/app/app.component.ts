import { Employee } from './shared/employee.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employees = [new Employee('Felipe Jaramillo Gómez',
                            'Developer',
                            'none'),
                            new Employee('Juan David Herrera',
                            'Developer',
                            'none'),
                            new Employee('Pablo Díaz',
                            'Developer',
                            'none'),
                            new Employee('Carlos Ángulo',
                            'Developer',
                            'none')];

}
