import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DataComponent } from './modules/data/data.component';

const routes: Routes = [
  {path:'', component:DefaultLayoutComponent,
  children:[{
  path:'', component:DashboardComponent}
,{
  path:'table', component:DataComponent}
]
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
