import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, LogoutComponent],
  exports: [HeaderComponent, LogoutComponent],
})
export class HeaderModule {}
