using prueba.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace prueba

{
    public class AppDBcontext : DbContext
    {
        public AppDBcontext() { }
        public AppDBcontext(DbContextOptions<AppDBcontext> options): base (options)
        {

        }
        public DbSet<tc> Empleados { get; set; }
        public object Trabajadores { get; internal set; }

        
    }
}
