import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // página inicial
  { path: 'menu', component: MenuComponent }, // página Menu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
