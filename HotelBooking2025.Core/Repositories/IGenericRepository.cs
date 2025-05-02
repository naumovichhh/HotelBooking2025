namespace HotelBooking2025.Core.Repositories
{
    public interface IGenericRepository<T> where T : class
    {
        public Task<T?> GetByIdAsync(int id);
        public IQueryable<T> GetAll();
        public Task<IList<T>> GetListAsync();
        public Task<T?> AddAsync(T entity);
        public Task<T?> EditAsync(T entity);
        public Task<T?> DeleteAsync(int id);
    }
}
