import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormComponent } from '../form/form.component';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [FormComponent, AsyncPipe],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent implements OnInit {

  userService: UserService = inject(UserService);
  user$: Observable<User>;

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

}
