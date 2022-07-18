using HotelBooking.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelBooking.Controllers
{
    [Route("api/[controller]/[action]")]
    public class HotelController : ControllerBase
    { 
        private readonly HotelService _hotelService;
        public HotelController(HotelService hotelService)
        {
            _hotelService = hotelService;
        }

        [HttpGet]
        public ActionResult GetHotels()
        {
            var hotels = _hotelService.GetHotels();
            return Ok(hotels);
        }

        [HttpGet]
        public ActionResult GetHotelById(string hotelId)
        {
            int getIdParam = 0;
            if(hotelId != null)
            {
                getIdParam = int.Parse(hotelId);
            }
            var hotel = _hotelService.GetHotelById(getIdParam);
            return Ok(hotel);
        }
    }
}
