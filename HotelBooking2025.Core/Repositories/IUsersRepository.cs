using HotelBooking2025.Core.Entities;

namespace HotelBooking2025.Core.Repositories
{
    public interface IUsersRepository
    {
        public Task<User> GetByIdAsync(int id);
        public Task<IEnumerable<User>> GetAllAsync();
        public Task<User> CreateAsync(User user);
        public Task<User> UpdateAsync(User user);
        public Task<User> DeleteAsync(int id);
    }
}
