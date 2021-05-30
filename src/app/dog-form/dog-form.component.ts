import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  /*defining properties to use it in dog-form.html*/
  breed = 'spaniel';
  subBreed = 'cocker';
  dogUrl!: string;
  failedToFetchDog!: boolean;

  /*inject the Dogservice*/
  constructor(private dogService: DogService) {
  }

  ngOnInit(): void {
  }

  /*DEFINR METHOD FOR EVENT BINDING*/
  findDog() {
    /*use the dogService*/
    this.dogService.findDog(this.breed, this.subBreed)
      .subscribe(result => {
        //consloe.lg(reslt)
        if (result.message) {
          //save the fetched message inside th dogUrl
          this.dogUrl = result.message;
          this.failedToFetchDog = false;
        } else {
          /*if ewe write somting is not exist then we will get an error message but we will not see it on screen
          so to see it on screen we should do that in html file*/
          this.failedToFetchDog = true;
        }
      }, _err => {
        this.failedToFetchDog = true;
      });
  }
}
