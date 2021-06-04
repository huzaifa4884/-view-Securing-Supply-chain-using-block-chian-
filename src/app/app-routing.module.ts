import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBatchComponent } from './create-batch/create-batch.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


// const routes: Routes = [];

const routes: Routes = [

  {path:'home', component: HomeComponent },
  {path:'', component: LoginComponent },
  {path:'create-batch', component: CreateBatchComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
