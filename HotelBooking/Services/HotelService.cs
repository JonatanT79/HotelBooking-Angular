using HotelBooking.Data;
using HotelBooking.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelBooking.Services
{
    public class HotelService
    {
        private readonly ApplicationDbContext _context;
        public HotelService(ApplicationDbContext context)
        {
            _context = context;
        }

       public List<Hotel> GetHotels()
        {
            var hotels = _context.Hotels.ToList();
            return hotels;
        }
    }
}
