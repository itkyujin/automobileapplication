import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './components/add-car/add-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-car' },
  { path: 'add-car', component: AddCarComponent },
  { path: 'edit-car/:id', component: EditCarComponent },
  { path: 'cars-list', component: CarsListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }