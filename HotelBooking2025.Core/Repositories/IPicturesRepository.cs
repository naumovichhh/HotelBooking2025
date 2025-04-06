using HotelBooking2025.Core.Entities;

namespace HotelBooking2025.Core.Repositories
{
    public interface IPicturesRepository
    {
        public Task<Picture> GetByIdAsync(int id);
        public Task<IEnumerable<Picture>> GetAllAsync();
        public Task<Picture> CreateAsync(Picture picture);
        public Task<Picture> UpdateAsync(Picture picture);
        public Task<Picture> DeleteAsync(Picture picture);
    }
}
