
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login', loadChildren:() => import('./login/login.module').then(p => p.LoginModule)
  },
  {
    path: 'formtable',loadChildren: () => import('./form-table/form-table.module').then(f => f.FormTableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
