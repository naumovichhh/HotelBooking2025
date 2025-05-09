﻿using AutoMapper;
using HotelBooking2025.Core.Entities;
using HotelBooking2025.Application.DTO;

namespace HotelBooking2025.API.Utilities
{
    public class AutoMapperDefaultProfile : Profile
    {
        public AutoMapperDefaultProfile()
        {
            CreateMap<Hotel, HotelDTO>().ReverseMap();
        }
    }
}
