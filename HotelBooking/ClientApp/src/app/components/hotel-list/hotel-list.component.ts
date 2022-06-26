import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  constructor(private hotelservice: HotelService) { }

  hotelList: any[]
  singleHotel: any

  ngOnInit() {
    this.getHotels();
    this.getHotelById();
  }

  getHotels() {

    this.hotelservice.getHotels().subscribe(res => {
      this.hotelList = res;
    });
  }

  getHotelById() {
    this.hotelservice.getHotelsById(1).subscribe(res => {
      this.singleHotel = res;
    })
  }
}
