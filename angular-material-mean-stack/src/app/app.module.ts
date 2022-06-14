import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular 8 components */
import { AddCarComponent } from './components/add-car/add-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  /* import the AngularMaterialModule. */
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';

/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';

/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-car' },
  { path: 'add-car', component: AddCarComponent },
  { path: 'edit-car/:id', component: EditCarComponent },
  { path: 'cars-list', component: CarsListComponent }
];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
*/

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    EditCarComponent,
    CarsListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

//export class AppRoutingModule { }
export class AppModule { }