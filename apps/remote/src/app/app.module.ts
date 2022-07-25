import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { AbcModule } from './abc/abc.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AbcModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
