import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { HttpClientModule } from "@angular/common/http";

import { CategoriesService } from "./shared/Categories.services";
import { AppComponent } from "./app.component";
import { TaskersServices } from "./shared/Taskers.services";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule
  ],
  providers: [
    CategoriesService,
    TaskersServices
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }