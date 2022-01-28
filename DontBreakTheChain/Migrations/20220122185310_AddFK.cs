using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DontBreakTheChain.Migrations
{
    public partial class AddFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chains_AspNetUsers_UserId",
                table: "Chains");

            migrationBuilder.DropIndex(
                name: "IX_Chains_UserId",
                table: "Chains");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Chains",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Chains",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Chains_UserId1",
                table: "Chains",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Chains_AspNetUsers_UserId1",
                table: "Chains",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chains_AspNetUsers_UserId1",
                table: "Chains");

            migrationBuilder.DropIndex(
                name: "IX_Chains_UserId1",
                table: "Chains");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Chains");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Chains",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Chains_UserId",
                table: "Chains",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Chains_AspNetUsers_UserId",
                table: "Chains",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
