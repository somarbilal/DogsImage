import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*IMPORT FORMSMODULE TO HELP US USE TWO WAY BINDING*/
import { FormsModule } from '@angular/forms';
/*IMPORT httpClient*/
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DogService } from './dog.service';

@NgModule({
  declarations: [
    AppComponent,
    DogFormComponent,
    DogsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
