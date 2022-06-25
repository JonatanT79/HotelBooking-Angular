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

        public ActionResult GetHotels()
        {
            var hotels = _hotelService.GetHotels();
            return Ok(hotels);
        }
    }
}
