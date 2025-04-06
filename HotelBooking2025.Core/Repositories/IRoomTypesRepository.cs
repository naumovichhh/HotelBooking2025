using HotelBooking2025.Core.Entities;

namespace HotelBooking2025.Core.Repositories
{
    public interface IRoomTypesRepository
    {
        public Task<RoomType> GetByIdAsync(int id);
        public Task<IEnumerable<RoomType>> GetAllAsync();
        public Task<RoomType> CreateAsync(RoomType roomType);
        public Task<RoomType> UpdateAsync(RoomType roomType);
        public Task<RoomType> DeleteAsync(RoomType roomType);
    }
}
