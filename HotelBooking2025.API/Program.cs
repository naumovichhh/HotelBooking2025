using Microsoft.EntityFrameworkCore;
using HotelBooking2025.Infrastructure.Contexts;
using HotelBooking2025.Infrastructure.Initializers;
using HotelBooking2025.Infrastructure.Repositories;
using HotelBooking2025.API.Utilities;
using HotelBooking2025.Application.Services;
using HotelBooking2025.Application.ServicesImplementations;
using HotelBooking2025.Core.Repositories;
using HotelBooking2025.Core.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(AutoMapperDefaultProfile));
builder.Services.AddScoped<IHotelsService, HotelsService>();
builder.Services.AddScoped<IGenericRepository<Hotel>, GenericRepository<Hotel>>();

string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<DefaultContext>(options =>
{
    options.UseSqlServer(connectionString);
});

var app = builder.Build();
DefaultDbInitializer.Initialize(app);

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
