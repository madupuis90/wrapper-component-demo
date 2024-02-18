import { AfterContentInit, Component, ContentChild, Input, signal } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { angularModules } from '../modules';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [...angularModules],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent implements AfterContentInit {

  @ContentChild(NgControl) control: NgControl;
  @Input() patchFunction: (property: { key: any }) => Observable<any>;

  editing = signal(false);
  cachedValue = signal('');

  ngAfterContentInit(): void {
    // store the initial value of the control
    this.cachedValue.set(this.control.value);
  }

  save() {
    const controlName = this.control.name as string;
    const property = {} as any;
    // create patch request
    property[controlName] = this.control.value;
    this.patchFunction(property).subscribe({
      next: (x) => {
        this.editing.set(false);
        this.cachedValue.set(x[controlName]);
      },
      error: (err) => {
        this.control.control?.setErrors(err.error);
      },
      complete: () => console.log('There are no more action happen.')
    });
  }

  open() {
    this.editing.set(true);
  }
  close() {
    this.editing.set(false);
  }
}
