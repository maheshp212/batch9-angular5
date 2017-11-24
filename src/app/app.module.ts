import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { VariablesComponent } from './variables/variables.component';
import { IntroComponent } from './intro/intro.component';
import {DirectivesComponent} from './directives/directives.component';
import { FormComponent } from './form/form.component'

const routes:Routes = [
      { path: 'variables', component: VariablesComponent },
      { path: 'intro', component: IntroComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'form', component: FormComponent}
    ];
@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    IntroComponent,
    DirectivesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
