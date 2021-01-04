using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserRegWeb.Data.Entity;

namespace UserRegWeb.Services.Interfaces
{
    public interface IMasterService
    {
        Task<int> SaveGender(Gender gender);
        Task<IEnumerable<Gender>> GetAllGender();
        Task<Gender> GetGenderById(int id);
        Task<bool> DeleteGenderById(int id);
    }
}
