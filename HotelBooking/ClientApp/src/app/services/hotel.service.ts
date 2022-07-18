import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private client: HttpClient) { }

  private readonly baseHotelsUrl: string = 'api/hotel'
  private readonly getHotelsUrl: string = '/GetHotels'
  private readonly getHotelByIdUrl: string = '/GetHotelById'


  getHotels(): Observable<any> {

    return this.client.get<any>(this.baseHotelsUrl + this.getHotelsUrl);
  }
  
  getHotelsById(hotelId: number): Observable<any> {

    let params = new HttpParams();
    params = params.append('hotelId', hotelId.toString());

    let options = {
      header: new HttpHeaders({'Content-Type': 'application/json'}),
      params: params
    }
    return this.client.get<any>(this.baseHotelsUrl + this.getHotelByIdUrl, options);
  }
}
