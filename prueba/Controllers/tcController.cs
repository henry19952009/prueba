using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prueba;
using prueba.Models;

namespace prueba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class tcController : ControllerBase
    {
        private readonly AppDBcontext _context;

        public tcController(AppDBcontext context)
        {
            _context = context;
        }

        // GET: api/tc
        [HttpGet]
        public async Task<ActionResult<IEnumerable<tc>>> GetEmpleados()
        {   
            return await _context.Empleados.ToListAsync();
        }

        // GET: api/tc/5
        [HttpGet("{id}")]
        public async Task<ActionResult<tc>> Gettc(int id)
        {
            var tc = await _context.Empleados.FindAsync(id);

            if (tc == null)
            {
                return NotFound();
            }

            return tc;
        }

        // PUT: api/tc/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puttc(int id, tc tc)
        {
            if (id != tc.Id)
            {
                return BadRequest();
            }

            _context.Entry(tc).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tcExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/tc
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<tc>> Posttc(tc tc)
        {
            _context.Empleados.Add(tc);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Gettc", new { id = tc.Id }, tc);
        }

        // DELETE: api/tc/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<tc>> Deletetc(int id)
        {
            var tc = await _context.Empleados.FindAsync(id);
            if (tc == null)
            {
                return NotFound();
            }

            _context.Empleados.Remove(tc);
            await _context.SaveChangesAsync();

            return tc;
        }

        private bool tcExists(int id)
        {
            return _context.Empleados.Any(e => e.Id == id);
        }
    }
}
