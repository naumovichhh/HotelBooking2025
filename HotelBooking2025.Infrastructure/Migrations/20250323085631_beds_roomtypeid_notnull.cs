using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HotelBooking2025.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class beds_roomtypeid_notnull : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Beds_RoomTypes_RoomTypeId",
                table: "Beds");

            migrationBuilder.AlterColumn<int>(
                name: "RoomTypeId",
                table: "Beds",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Beds_RoomTypes_RoomTypeId",
                table: "Beds",
                column: "RoomTypeId",
                principalTable: "RoomTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Beds_RoomTypes_RoomTypeId",
                table: "Beds");

            migrationBuilder.AlterColumn<int>(
                name: "RoomTypeId",
                table: "Beds",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Beds_RoomTypes_RoomTypeId",
                table: "Beds",
                column: "RoomTypeId",
                principalTable: "RoomTypes",
                principalColumn: "Id");
        }
    }
}
