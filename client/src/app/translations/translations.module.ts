import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationsComponent } from './translations.component';
import { UserInputComponent } from './components/user-input/user-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TranslationsComponent, UserInputComponent],
})
export class TranslationsModule {}
