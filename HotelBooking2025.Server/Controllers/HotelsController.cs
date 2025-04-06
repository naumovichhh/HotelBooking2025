using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using HotelBooking2025.Application.Services;
using HotelBooking2025.Application.DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HotelBooking2025.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelsController : ControllerBase
    {
        private readonly IHotelsService _hotelsService;

        public HotelsController(IHotelsService hotelsService)
        {
            _hotelsService = hotelsService;
        }

        // GET: api/<HotelsController>
        [HttpGet]
        public async Task<IActionResult> Get(string country, string locality, DateOnly fromDate, DateOnly toDate, int adultNum, int childNum)
        {
            //var hotels = new Hotel[]
            //{
            //    new Hotel() {Id = 1, Country = "France", Locality = "Saint-Etienne", Address = "Dombrovsky 84", Name = "Boince", Image = "hotel.jpg", Description = "1"},
            //    new Hotel() {Id = 2, Country = "Belarus", Locality = "Hrodna", Address = "Gorkogo 77", Name = "BELARUS", Image = "hotel.jpg", Description = "2"},
            //    new Hotel() {Id = 3, Country = "Ukraine", Locality = "Lviv", Address = "Shuhevicha 30", Name = "Andrzey Duda", Image = "hotel.jpg", Description = "3"},
            //    new Hotel() {Id = 4, Country = "Great Britain", Locality = "Newcastle upon Tyne", Address = "Saakashvili 88", Name = "Poroshenko", Image = "hotel.jpg", Description = "4"},
            //    new Hotel() {Id = 5, Country = "Belarus", Locality = "Minsk", Address = "Maksima Tanka 4", Name = "Crown Plaza", Image = "hotel.jpg", Description = "5"}
            //};
            return Ok(await _hotelsService.GetFilteredAsync(h => h.Country == country && Regex.Match(h.Locality, locality).Success));
        }

        // GET api/<HotelsController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var hotel = await _hotelsService.GetByIdAsync(id);
            if (hotel != null)
                return Ok(hotel);
            else
                return NotFound();
        }

        // POST api/<HotelsController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] HotelDTO hotel)
        {
            var added = await _hotelsService.AddAsync(hotel);
            if (added != null)
                return CreatedAtAction(nameof(Get), new { id = added.Id }, added);
            else
                return StatusCode(500, "Internal server error");
        }

        // PUT api/<HotelsController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] HotelDTO hotel)
        {
            if (id != hotel.Id)
                return BadRequest();

            var updated = await _hotelsService.UpdateAsync(hotel);
            if (updated != null && updated.Id == id)
                return Ok(updated);
            else
                return StatusCode(500, "Internal server error");
        }

        // DELETE api/<HotelsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _hotelsService.DeleteAsync(id);
            if (deleted != null && deleted.Id == id)
                return Ok(deleted);
            else
                return StatusCode(500, "Internal server error");
        }
    }
}
