import { Component } from '@angular/core';
import { DataService } from './data.service';
import {FormBuilder,Validator, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  constructor(private _dataService: DataService,private fb:FormBuilder) {

    // this._dataService.getUsers()
    //   .subscribe(res => this.users = res);

  }
  
  public seatBookingForm= this.fb.group({
    numberOfSeats:['',Validators.required]
  });

  onSubmit(){
    console.log(this.seatBookingForm.value)
    this._dataService.confirmBookingDetails(this.seatBookingForm.value).subscribe((res) => {
        console.log(res.message);
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err.error.message + " Please submit the form again!!!");
        }
      });
  }

}
