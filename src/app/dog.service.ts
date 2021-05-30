import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/*DEFINE AN INTERFACE FOR FINDING ONE DOG*/
interface BreedSingleImageResponse {
  message: string;
  status: string;
}
/*DEFINE INTERFACE FOR FINDING MANY DOGS*/
/*we need to export this service to use it in dog-list.ts*/
export interface BreedImagesResponse {
  message: string[];
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogService {
/*WE NEED HTTPSERVICE TO FETCH DATA FRO EXTERNAL RESOURSES*/
//WE DEFINE INSTANCE OF HTTPCLIENT WHICH ITS NAME IS http
  constructor(private http: HttpClient) { }

  /*DEFINE METHOD FINDDOG TO FETCH API ACCORDING TO THE BREED OR SUBBREED THAT WE PASS TO IT, AND IT WILL FETCH RANDOM IMAGES
  THIS METHOD RETURN OBSERVABLE OF BREEDSINGLEIMAGESRESPONSE*/
  //? means optional
  findDog(breed: string, subBreed?: string): Observable<BreedSingleImageResponse> {
    const endpoint = subBreed ?
      `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`:
      `https://dog.ceo/api/breed/${breed}/images/random`;
//GET THE DATA USING THE OBSERVABLE WHERE THE OBSERVABLE FETCH STREAM OF VALUES
    return this.http.get<BreedSingleImageResponse>(endpoint);
  }
/*we create anothr method to use it in dogs-list component, we add another interface and we add the word count to the end or
our API link which refer to the number of dogs we want to fetch*/
  findMany(breed: string, subBreed: string, count: number): Observable<BreedImagesResponse> {
    const endpoint = subBreed ?
      `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/${count}`:
      `https://dog.ceo/api/breed/${breed}/images/random/${count}`;

    return this.http.get<BreedImagesResponse>(endpoint);
  }
}
