namespace HotelBooking2025.Core.Entities
{
    public class Feature
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public ICollection<RoomType>? RoomTypes { get; set; }
    }
}
