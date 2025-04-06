namespace HotelBooking2025.Core.Entities
{
    public class AdditionalService
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public ICollection<Hotel>? Hotels { get; set; }
        public ICollection<Booking>? Bookings { get; set; }
    }
}
