using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DontBreakTheChain.Migrations
{
    public partial class AddLazyLoad : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chains_AspNetUsers_UserId1",
                table: "Chains");

            migrationBuilder.DropIndex(
                name: "IX_Chains_UserId1",
                table: "Chains");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Chains");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Chains");

            migrationBuilder.AddColumn<string>(
                name: "ChainUserId",
                table: "Chains",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Chains_ChainUserId",
                table: "Chains",
                column: "ChainUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Chains_AspNetUsers_ChainUserId",
                table: "Chains",
                column: "ChainUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chains_AspNetUsers_ChainUserId",
                table: "Chains");

            migrationBuilder.DropIndex(
                name: "IX_Chains_ChainUserId",
                table: "Chains");

            migrationBuilder.DropColumn(
                name: "ChainUserId",
                table: "Chains");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Chains",
                type: "int",
                nullable: true);

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
    }
}
