import { Routes } from '@angular/router';
import { CreatePageComponent } from './create-page/create-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';

export const routes: Routes = [
  { path: 'create', component: CreatePageComponent },
  { path: 'edit', component: UpdatePageComponent },
];
