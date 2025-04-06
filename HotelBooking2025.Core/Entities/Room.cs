namespace HotelBooking2025.Core.Entities
{
    public class Room
    {
        public int Id { get; set; }
        public required int RoomTypeId { get; set; }
        public required int Number { get; set; }
        public RoomType? RoomType { get; set; }
        public ICollection<Booking>? Bookings { get; set; }
    }
}
