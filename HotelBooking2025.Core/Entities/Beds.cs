namespace HotelBooking2025.Core.Entities
{
    public class Beds
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required int Count { get; set; }
        public required int RoomTypeId { get; set; }
    }
}
