import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { SurveyComponent } from './main/survey/survey.component';
import { QuestionBoxComponent } from './main/survey/question-box/question-box.component';

import { SurveyService } from './services/survey.service';
import { OrganizationListComponent } from './main/organization-list/organization-list.component';
import { AjaxService } from './services/ajax.service';
import { OrganizationBoxComponent } from './main/organization-list/organization-box/organization-box.component';
import { QuickExitComponent } from './main/quick-exit/quick-exit.component';
import { HomeComponent } from './main/home/home.component';
import { UtilityBarComponent } from './main/organization-list/utility-bar/utility-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    SurveyComponent,
    QuestionBoxComponent,
    OrganizationListComponent,
    OrganizationBoxComponent,
    QuickExitComponent,
    HomeComponent,
    UtilityBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ProgressbarModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [
    SurveyService,
    AjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
