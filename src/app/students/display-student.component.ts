import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html'
})
export class DisplayStudentComponent {
  @Input()
  listEmployees: any;
}
