using HotelBooking2025.Core.Entities;
using HotelBooking2025.Core.Repositories;
using HotelBooking2025.Application.DTO;
using HotelBooking2025.Application.Services;
using AutoMapper;

namespace HotelBooking2025.Application.ServicesImplementations
{
    public class HotelsService : IHotelsService
    {
        private readonly IGenericRepository<Hotel> _repository;
        private readonly IMapper _mapper;

        public HotelsService(IGenericRepository<Hotel> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<HotelDTO?> GetByIdAsync(int id)
        {
            var entity = await _repository.GetByIdAsync(id);
            if (entity != null)
            {
                return _mapper.Map<HotelDTO?>(entity);
            }
            else
                return null;
        }

        public async Task<IList<HotelDTO>> GetFilteredAsync(Func<HotelDTO, bool> predicate)
        {
            Func<Hotel, bool> predicateDTO = entity =>
            {
                var dto = _mapper.Map<HotelDTO>(entity);
                return predicate(dto);

            };
            var enumerable = (await _repository.GetListAsync()).Where(predicateDTO).Select(entity => _mapper.Map<HotelDTO>(entity));
            return enumerable.ToList();
        }

        public async Task<IList<HotelDTO>> GetListAsync()
        {
            var entities = await _repository.GetListAsync();
            return entities.Select(entity => _mapper.Map<HotelDTO>(entity)).ToList();
        }

        public async Task<HotelDTO?> AddAsync(HotelDTO hotel)
        {
            var entity = await _repository.AddAsync(_mapper.Map<Hotel>(hotel));
            return _mapper.Map<HotelDTO>(entity);
        }

        public async Task<HotelDTO?> UpdateAsync(HotelDTO hotel)
        {
            var entity = await _repository.UpdateAsync(_mapper.Map<Hotel>(hotel));
            return _mapper.Map<HotelDTO>(entity);
        }

        public async Task<HotelDTO?> DeleteAsync(int id)
        {
            var entity = await _repository.DeleteAsync(id);
            return _mapper.Map<HotelDTO>(entity);
        }
    }
}
