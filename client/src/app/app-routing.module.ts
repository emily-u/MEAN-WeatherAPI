import { ChicagoComponent } from './chicago/chicago.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'chicago',component: ChicagoComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}