import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationsComponent } from './translations/translations.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'translations', component: TranslationsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
