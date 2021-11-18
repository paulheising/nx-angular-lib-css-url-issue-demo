import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoLibModule } from '@my-demo/demo-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DemoLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
