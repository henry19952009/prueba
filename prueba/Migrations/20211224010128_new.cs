using Microsoft.EntityFrameworkCore.Migrations;

namespace prueba.Migrations
{
    public partial class @new : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Empleados",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Empleado = table.Column<string>(type: "varchar(100)", nullable: false),
                    Sueldo = table.Column<int>(type: "int", nullable: false),
                    CategoriaEmpleado = table.Column<string>(type: "varchar(20)", nullable: false),
                    VentasMes = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empleados", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Empleados");
        }
    }
}
