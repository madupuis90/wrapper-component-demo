import { Component } from '@angular/core';
import { angularModules } from '../modules';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css'
})
export class CreatePageComponent {

}
