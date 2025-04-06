using Microsoft.EntityFrameworkCore;
using HotelBooking2025.Core.Entities;

namespace HotelBooking2025.Infrastructure.Contexts
{
    public class DefaultContext : DbContext
    {
        public DefaultContext(DbContextOptions<DefaultContext> options) : base(options)
        { }

        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<RoomType> RoomTypes { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<AdditionalService> AdditionalServices { get; set; }
        public DbSet<Feature> Features { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Picture> Pictures { get; set; }
        public DbSet<Beds> Beds { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
        }

    }
}
