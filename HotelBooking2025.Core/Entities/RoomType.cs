namespace HotelBooking2025.Core.Entities
{
    public class RoomType
    {
        public int Id { get; set; }
        public required int HotelId { get; set; }
        public required int AdultPlaces { get; set; }
        public required int ChildPlaces { get; set; }
        public required string Name { get; set; }
        public required int Area { get; set; }
        public ICollection<Beds>? Beds { get; set; }
        public ICollection<Picture>? Pictures { get; set; }
        public ICollection<Feature>? Features { get; set; }
        public Hotel? Hotel { get; set; }
    }
}
