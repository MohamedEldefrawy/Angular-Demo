import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentComponent} from "./student/student.component";
import {ContentComponent} from './content/content.component';
import {CoreModule} from "./core/core.module";
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ContentComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
