using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DontBreakTheChain.Migrations
{
    public partial class AddChains : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chain_AspNetUsers_UserId",
                table: "Chain");

            migrationBuilder.DropForeignKey(
                name: "FK_ChainPart_Chain_ChainID",
                table: "ChainPart");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChainPart",
                table: "ChainPart");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Chain",
                table: "Chain");

            migrationBuilder.RenameTable(
                name: "ChainPart",
                newName: "ChainParts");

            migrationBuilder.RenameTable(
                name: "Chain",
                newName: "Chains");

            migrationBuilder.RenameIndex(
                name: "IX_ChainPart_ChainID",
                table: "ChainParts",
                newName: "IX_ChainParts_ChainID");

            migrationBuilder.RenameIndex(
                name: "IX_Chain_UserId",
                table: "Chains",
                newName: "IX_Chains_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChainParts",
                table: "ChainParts",
                column: "ChainPartID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Chains",
                table: "Chains",
                column: "ChainID");

            migrationBuilder.AddForeignKey(
                name: "FK_ChainParts_Chains_ChainID",
                table: "ChainParts",
                column: "ChainID",
                principalTable: "Chains",
                principalColumn: "ChainID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Chains_AspNetUsers_UserId",
                table: "Chains",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChainParts_Chains_ChainID",
                table: "ChainParts");

            migrationBuilder.DropForeignKey(
                name: "FK_Chains_AspNetUsers_UserId",
                table: "Chains");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Chains",
                table: "Chains");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChainParts",
                table: "ChainParts");

            migrationBuilder.RenameTable(
                name: "Chains",
                newName: "Chain");

            migrationBuilder.RenameTable(
                name: "ChainParts",
                newName: "ChainPart");

            migrationBuilder.RenameIndex(
                name: "IX_Chains_UserId",
                table: "Chain",
                newName: "IX_Chain_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_ChainParts_ChainID",
                table: "ChainPart",
                newName: "IX_ChainPart_ChainID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Chain",
                table: "Chain",
                column: "ChainID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChainPart",
                table: "ChainPart",
                column: "ChainPartID");

            migrationBuilder.AddForeignKey(
                name: "FK_Chain_AspNetUsers_UserId",
                table: "Chain",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ChainPart_Chain_ChainID",
                table: "ChainPart",
                column: "ChainID",
                principalTable: "Chain",
                principalColumn: "ChainID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
