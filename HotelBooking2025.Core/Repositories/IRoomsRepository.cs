using HotelBooking2025.Core.Entities;

namespace HotelBooking2025.Core.Repositories
{
    public interface IRoomsRepository
    {
        public Task<Room> GetByIdAsync(int id);
        public Task<IEnumerable<Room>> GetAllAsync();
        public Task<Room> CreateAsync(Room room);
        public Task<Room> UpdateAsync(Room room);
        public Task<Room> DeleteAsync(int id);
    }
}
