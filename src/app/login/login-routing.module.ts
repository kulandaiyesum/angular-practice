import { StComponent } from './components/st/st.component';
import { MtComponent } from './components/mt/mt.component';
import { DropdwonComponent } from './components/dropdwon/dropdwon.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dp', component: DropdwonComponent
  },
  {
    path: 'mt', component: MtComponent
  },
  {
    path: 'st', component: StComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
