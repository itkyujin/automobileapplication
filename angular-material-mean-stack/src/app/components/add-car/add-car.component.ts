import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetCarForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  carForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'WHITE'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private carApi: ApiService
  ) {}

  ngOnInit() {
    this.submitBookFrom();
  }

  submitBookFrom() {
    this.carForm = this.fb.group({
      car_make: ['', [Validators.required]],
      car_model: ['', [Validators.required]],
      color: ['', [Validators.required]],
      subjects: [this.subjectArray],
      car_year: ['', [Validators.required]],
      car_trim: ['Male']
    })
  }


  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  /* Date */
  formatDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.carForm.get('car_year').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.carForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitCarForm() {
    if (this.carForm.valid) {
      this.carApi.AddCar(this.carForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/cars-list'))
      });
    }
  }

}