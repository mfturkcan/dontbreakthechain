using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DontBreakTheChain.Migrations
{
    public partial class AddRoles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "7dfb69e0-163b-4d19-a8ca-2ec050c90637", "affcd915-a9f1-4d72-8a93-bf9c54d1aa3f", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "de878c5b-a7e9-497e-a59a-d6433f0c7922", "c7880f3e-914b-4f06-8ef7-26b3e9a93acb", "Member", "MEMBER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7dfb69e0-163b-4d19-a8ca-2ec050c90637");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "de878c5b-a7e9-497e-a59a-d6433f0c7922");
        }
    }
}
