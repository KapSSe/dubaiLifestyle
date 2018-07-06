import { Injectable } from '@angular/core';
import * as offersData from '../../assets/offers/offers.json';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private date: String;
  private offersCount: Number;
  private locale: String;
  private flagUrl: String;

  constructor() { 
    this.setExpirationTime();
    this.setOffers();
    this.setLocale();
    this.setFlagUrl();
  }

  private setExpirationTime() {
    const current = new Date();
    const expirationDate = new Date();
    expirationDate.setMinutes(current.getMinutes() + offersData.expirationTime.minutes);
    expirationDate.setSeconds(expirationDate.getSeconds()+ offersData.expirationTime.seconds);
    this.date = expirationDate.toISOString();
  }

  private setOffers(){
      const min = 3;
      const max = 100;
      let rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      this.offersCount = rand;
  }

  private setLocale(){
      this.locale = offersData.locale;
  }

  private setFlagUrl(){
      this.flagUrl = offersData.flagUrl;
  }

  public getExpirationTime() {
    return this.date;
  }

  public getOffers(){
    return this.offersCount;
  }

  public getLocale(){
    return this.locale;
  }
  
  public getFlagUrl(){
    return this.flagUrl;
  }

}
