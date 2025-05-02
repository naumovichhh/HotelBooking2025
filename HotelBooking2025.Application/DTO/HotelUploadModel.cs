using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace HotelBooking2025.Application.DTO
{
    public class HotelUploadModel
    {
        public int? Id { get; set; }
        public required string Country { get; set; }
        public required string Locality { get; set; }
        public required string Address { get; set; }
        public required string Name { get; set; }
        public required IFormFile Image { get; set; }
        public required string Description { get; set; }
        public required int Stars { get; set; }
    }
}
