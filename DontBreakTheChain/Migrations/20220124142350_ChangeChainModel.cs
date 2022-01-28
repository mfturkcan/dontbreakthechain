using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DontBreakTheChain.Migrations
{
    public partial class ChangeChainModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChainParts_Chains_ChainID",
                table: "ChainParts");

            migrationBuilder.AlterColumn<string>(
                name: "ChainTitle",
                table: "Chains",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "DailyGoal",
                table: "Chains",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OverarchingGoal",
                table: "Chains",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "ChainSmallNote",
                table: "ChainParts",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddForeignKey(
                name: "FK_ChainParts_Chains_ChainID",
                table: "ChainParts",
                column: "ChainID",
                principalTable: "Chains",
                principalColumn: "ChainID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChainParts_Chains_ChainID",
                table: "ChainParts");

            migrationBuilder.DropColumn(
                name: "DailyGoal",
                table: "Chains");

            migrationBuilder.DropColumn(
                name: "OverarchingGoal",
                table: "Chains");

            migrationBuilder.AlterColumn<string>(
                name: "ChainTitle",
                table: "Chains",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "ChainSmallNote",
                table: "ChainParts",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100);

            migrationBuilder.AddForeignKey(
                name: "FK_ChainParts_Chains_ChainID",
                table: "ChainParts",
                column: "ChainID",
                principalTable: "Chains",
                principalColumn: "ChainID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
