import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VcLogsComponent } from './components/vc-logs/vc-logs.component';
import { VersionControlComponent } from './components/version-control/version-control.component';

@NgModule({
  declarations: [
    AppComponent,
    VcLogsComponent,
    VersionControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
