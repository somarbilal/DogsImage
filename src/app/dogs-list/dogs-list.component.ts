import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService, BreedImagesResponse } from '../dog.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  /*we define properties here to use later in getDog method*/
  breed: any;
  subBreed: any;
  dogUrls!: string[];
  failedToFetchDogs = false;

  /*in order to resolve route parameter like breed and subbreed so we need to inject the DogService and Activatedroute*/
  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    /*we call getDogs when the component is initialized so here we can fetch data inside angular component*/
    this.getDogs();
  }

  /*we define method to fetch the image from paramap*/
  getDogs() {
    this.breed = this.route.snapshot.paramMap.get('breed');
    this.subBreed = this.route.snapshot.paramMap.get('sub-breed');

    /*we use the dogService to use the method call finMany using the interface BreedImagesResponse*/
    this.dogService.findMany(this.breed, this.subBreed, 20)
      .subscribe((result: BreedImagesResponse) => {
        if (result.status === 'success') {
          /*if we succeed we asign the message to dogUrls*/
          this.dogUrls = result.message;
          console.log(this.dogUrls);
        } else {
          this.failedToFetchDogs = true;
        }
      }, (_err) => this.failedToFetchDogs = true);
  }

}
