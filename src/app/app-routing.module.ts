import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HousingListComponent } from './housing-list/housing-list.component';
import { HousingDetailsComponent } from './housing-details/housing-details.component';

const routes: Routes = [
  { path: '', component: HousingListComponent },
  { path: 'housing/:id', component: HousingDetailsComponent }
];

//add with compononent input binding feature
/**
 * add withComponentInputBinding feature
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
