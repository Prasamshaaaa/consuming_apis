import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LabTestsDataListComponent } from './lab-tests-data-list/lab-tests-data-list.component';
import { LabspecimensComponent } from './labspecimens/labspecimens.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './auth.guard';
import { SchemeComponent } from './scheme/scheme.component';
import { PriceCategoriesComponent } from './price-categories/price-categories.component';
import { SchemePriceCategoryComponent } from './scheme-price-category/scheme-price-category.component';
import { ChatComponent } from './chat/chat.component';
import { ReportTemplateComponent } from './report-template/report-template.component';
import { PatientListForFinalReportComponent } from './patient-list-for-final-report/patient-list-for-final-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],

    children: [
      { path: 'labtestdatalistcomponent', component: LabTestsDataListComponent, canActivate: [AuthGuard] },
      { path: 'labspecimencomponent', component: LabspecimensComponent, canActivate: [AuthGuard] },
      { path: 'schemepricecategorycomponent', component: SchemePriceCategoryComponent, canActivate: [AuthGuard] },
      { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
      { path: 'reporttemplate', component: ReportTemplateComponent, canActivate: [AuthGuard] },
      { path: 'patientlistforfinalreport', component: PatientListForFinalReportComponent, canActivate: [AuthGuard] },


    ]

  },

  { path: 'nav', component: NavComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: "login" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
