import { MatButtonModule } from '@angular/material/button';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormComponent } from './form/form.component';
import { JsonPipe } from '@angular/common';

export const angularModules = [
  JsonPipe,
  MatButtonModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule
]