import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationsComponent } from './translations/translations.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'translations', component: TranslationsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
