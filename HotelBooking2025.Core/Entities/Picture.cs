namespace HotelBooking2025.Core.Entities
{
    public class Picture
    {
        public int Id { get; set; }
        public required string FileName { get; set; }
        public required int RoomTemplateId { get; set; }
        public RoomType? RoomTemplate { get; set; }
    }
}
