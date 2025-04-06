using System.Reflection.Metadata;

namespace HotelBooking2025.Core.Entities
{
    public class Booking
    {
        public int Id { get; set; }
        public required int RoomId { get; set; }
        public required int UserId { get; set; }
        public required DateOnly DateFrom { get; set; }
        public required DateOnly DateTo { get; set; }
        public Room? Room { get; set; }
        public User? User { get; set; }
        public ICollection<AdditionalService>? AdditionalServices { get; set; }
    }
}
