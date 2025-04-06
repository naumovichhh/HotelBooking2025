using System.Linq.Expressions;
using HotelBooking2025.Application.DTO;

namespace HotelBooking2025.Application.Services
{
    public interface IHotelsService
    {
        public Task<HotelDTO?> GetByIdAsync(int id);
        public Task<IList<HotelDTO>> GetFilteredAsync(Func<HotelDTO, bool> predicate);
        public Task<IList<HotelDTO>> GetListAsync();
        public Task<HotelDTO?> AddAsync(HotelDTO hotel);
        public Task<HotelDTO?> UpdateAsync(HotelDTO hotel);
        public Task<HotelDTO?> DeleteAsync(int id);
    }
}
