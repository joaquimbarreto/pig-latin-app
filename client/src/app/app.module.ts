import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { TranslationsModule } from './translations/translations.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './users/store/user.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ user: userReducer }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersModule,
    TranslationsModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
