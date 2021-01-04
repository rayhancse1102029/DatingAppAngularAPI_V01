using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UserRegWeb.Data;
using UserRegWeb.Data.Entity;
using UserRegWeb.Services.Interfaces;

namespace UserRegWeb.Services
{
    public class MasterService : IMasterService
    {
        private readonly DatingDbContext _context;

        public MasterService(DatingDbContext _context)
        {
            this._context = _context;
        }

        public async Task<bool> DeleteGenderById(int id)
        {
            _context.Genders.Remove(await _context.Genders.FindAsync(id));
            return true;
        }

        public async Task<IEnumerable<Gender>> GetAllGender()
        {
            return await _context.Genders.ToListAsync();
        }

        public async Task<Gender> GetGenderById(int id)
        {
            return await _context.Genders.FindAsync(id);
        }

        public async Task<int> SaveGender(Gender gender)
        {
            if (gender.id > 0)
            {
                _context.Genders.Update(gender);
            }
            else
            {
                _context.Genders.Add(gender);
            }

            await _context.SaveChangesAsync();

            return gender.id;
        }
    }
}
