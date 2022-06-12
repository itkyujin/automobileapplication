import { Car } from './../../shared/car';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent implements OnInit {
  CarData: any = [];
  dataSource: MatTableDataSource<Car>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    '_id',
    'car_make',
    'car_model',
    'car_trim',
    'action',
  ];
  constructor(private carApi: ApiService) {
    this.carApi.GetCars().subscribe((data) => {
      this.CarData = data;
      this.dataSource = new MatTableDataSource<Car>(this.CarData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }
  ngOnInit() {}
  deleteCar(index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this.carApi.DeleteCar(e._id).subscribe();
    }
  }
}