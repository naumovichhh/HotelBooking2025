using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using HotelBooking2025.Infrastructure.Contexts;

namespace HotelBooking2025.Infrastructure.Initializers
{
    public class DefaultDbInitializer
    {
        public static void Initialize(IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<DefaultContext>();
                    context.Database.Migrate();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
    }
}
