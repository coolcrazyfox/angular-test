import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorComponent } from "./components/navigator/navigator.component";
import { SummaryComponent } from "./components/summary/summary.component";

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'navigator', component: NavigatorComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
