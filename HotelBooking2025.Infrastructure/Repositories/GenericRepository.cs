using HotelBooking2025.Core.Repositories;
using HotelBooking2025.Infrastructure.Contexts;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking2025.Infrastructure.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly DefaultContext _context;
        private readonly DbSet<T> _dbSet;

        public GenericRepository(DefaultContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public IQueryable<T> GetAll()
        {
            return _dbSet;
        }

        public async Task<IList<T>> GetListAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T?> AddAsync(T entity)
        {
            var entry = await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
            return entry.Entity;
        }

        public async Task<T?> UpdateAsync(T entity)
        {
            _dbSet.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<T?> DeleteAsync(int id)
        {
            var entity = await _dbSet.FindAsync(id);
            if (entity != null)
            {
                _dbSet.Remove(entity);
                await _context.SaveChangesAsync();
            }

            return entity;
        }
    }
}
