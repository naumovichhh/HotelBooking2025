using HotelBooking2025.Core.Entities;

namespace HotelBooking2025.Core.Repositories
{
    public interface IFeaturesRepository
    {
        public Task<Feature> GetByIdAsync(int id);
        public Task<IEnumerable<Feature>> GetAllAsync();
        public Task<Feature> CreateAsync(Feature feature);
        public Task<Feature> UpdateAsync(Feature feature);
        public Task<Feature> DeleteAsync(int id);
    }
}
