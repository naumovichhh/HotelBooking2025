using HotelBooking2025.Core.Entities;
using HotelBooking2025.Core.Repositories;
using HotelBooking2025.Application.DTO;
using HotelBooking2025.Application.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;

namespace HotelBooking2025.Application.ServicesImplementations
{
    public class HotelsService : IHotelsService
    {
        private readonly IGenericRepository<Hotel> _repository;
        private readonly IWebHostEnvironment _environment;
        private readonly IMapper _mapper;

        public HotelsService(IGenericRepository<Hotel> repository, IMapper mapper, IWebHostEnvironment environment)
        {
            _repository = repository;
            _mapper = mapper;
            _environment = environment;
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

        public async Task<HotelDTO?> AddAsync(HotelUploadModel hotelUploadModel)
        {
            var imageFile = hotelUploadModel.Image;
            var imageFilePath = UploadImageFile(imageFile);
            var hotelEntity = new Hotel()
            {
                Name = hotelUploadModel.Name,
                Description = hotelUploadModel.Description,
                Image = imageFilePath,
                Stars = hotelUploadModel.Stars,
                Locality = hotelUploadModel.Locality,
                Country = hotelUploadModel.Country,
                Address = hotelUploadModel.Address
            };

            var entity = await _repository.AddAsync(hotelEntity);
            return _mapper.Map<HotelDTO>(entity);
        }

        public async Task<HotelDTO?> EditAsync(HotelUploadModel hotelUploadModel)
        {
            Hotel existingEntity = await _repository.GetByIdAsync(hotelUploadModel.Id.Value);
            if (existingEntity == null)
                return null;


            existingEntity.Name = hotelUploadModel.Name;
            existingEntity.Description = hotelUploadModel.Description;
            existingEntity.Stars = hotelUploadModel.Stars;
            existingEntity.Locality = hotelUploadModel.Locality;
            existingEntity.Country = hotelUploadModel.Country;
            existingEntity.Address = hotelUploadModel.Address;

            if (hotelUploadModel.Image != null)
            {
                var imageFilePath = UploadImageFile(hotelUploadModel.Image);
                existingEntity.Image = imageFilePath;
            }

            var resultEntity = await _repository.EditAsync(existingEntity);
            return _mapper.Map<HotelDTO>(resultEntity);
        }

        public async Task<HotelDTO?> DeleteAsync(int id)
        {
            var entity = await _repository.DeleteAsync(id);
            return _mapper.Map<HotelDTO>(entity);
        }

        private string UploadImageFile(IFormFile imageFile)
        {
            try
            {
                string fileName = Path.Combine(_environment.WebRootPath, "img", Guid.NewGuid() + Path.GetExtension(imageFile.FileName));//$"{_environment.WebRootPath}{Path.DirectorySeparatorChar}img{Path.DirectorySeparatorChar}{Guid.NewGuid()}{Path.GetExtension(imageFile.FileName)}";
                using (Stream readStream = imageFile.OpenReadStream(), writeStream = File.Create(fileName))
                {
                    byte[] buffer = new byte[readStream.Length];
                    readStream.Read(buffer, 0, buffer.Length);
                    writeStream.Write(buffer, 0, buffer.Length);
                }

                return Path.GetFileName(fileName);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return null;
        }
    }
}
