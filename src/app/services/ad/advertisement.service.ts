import { Injectable } from '@angular/core';
import { Advertisement } from './advertisement';
import { ADVERTISEMENTS } from './advertisements';


@Injectable({
  providedIn: 'root',
})

export class AdService {

  constructor( ) {}

  getAds(): Advertisement[] {
    return ADVERTISEMENTS;
  }

}