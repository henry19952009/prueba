using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace prueba.Models
{
    public class tc
    {   

        [Key]
        public int Id { get; set; }


        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Empleado { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Sueldo { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string CategoriaEmpleado { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int VentasMes { get; set; }




    }
}
