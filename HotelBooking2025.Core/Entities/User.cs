using System.Security.Principal;

namespace HotelBooking2025.Core.Entities
{
    public class User
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Salt { get; set; }
        public ICollection<Role>? Roles { get; set; }
        public ICollection<Booking>? Bookings { get; set; }
    }
}
