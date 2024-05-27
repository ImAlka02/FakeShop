import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { NewComponent } from './views/new/new.component';
import { EditComponent } from './views/edit/edit.component';
import { ProductoComponent } from './views/producto/producto.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'new', component:NewComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'producto/:id', component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DashboardComponent, NewComponent, EditComponent, ProductoComponent
]
