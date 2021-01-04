using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace UserRegWeb.Data.Entity
{
    public class Base
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public string createdBy { get; set; }
        public DateTime? createdAt { get; set; }

        public string updatedBy { get; set; }
        public DateTime? updatedAt { get; set; }
    }
}
