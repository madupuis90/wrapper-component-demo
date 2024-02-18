import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { angularModules } from '../modules';
import { UserService } from '../user.service';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [...angularModules, WrapperComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  mode = 'create'; // default mode is create
  userForm: FormGroup;


  private _user: User;
  @Input() set user(user: User) {
    this._user = user;
    this.mode = 'edit'; // when user is passed in, mode is edit
    this.userForm.patchValue({ // update the form with the user passed in
      name: this._user.name,
      email: this._user.email,
      age: this._user.age
    });
  }
  get user() {
    return this._user;
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      age: ['']
    });
  }

  // arrow function is important to keep the context of this
  patchUser = (property: { [key: string]: any }): Observable<User> => {
    const userProperty = property as Partial<User>;
    return this.userService.patchUser(userProperty);
  }

  onSubmit(): void {
    this.userService.updateUser(this.userForm.value).subscribe((updatedUser) => {
      this.user = updatedUser;
    });
  }

}
