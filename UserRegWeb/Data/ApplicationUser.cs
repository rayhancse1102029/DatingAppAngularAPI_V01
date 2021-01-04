using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using UserRegWeb.Data.Entity;

namespace UserRegWeb.Data
{
    public class ApplicationUser : IdentityUser
    {

        public string fullName { get; set; }
        public decimal? age { get; set; }

        public DateTime? createdAt { get; set; }

        [MaxLength(120)]
        public string createdBy { get; set; }

        public DateTime? updatedAt { get; set; }

        [MaxLength(120)]
        public string updatedBy { get; set; }

    }
}
