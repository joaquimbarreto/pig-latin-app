import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  declarations: [UsersComponent, LoginComponent, AlertComponent],
  exports: [UsersComponent, LoginComponent, AlertComponent],
})
export class UsersModule {}