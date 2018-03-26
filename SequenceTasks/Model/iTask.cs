using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace SequenceTasks.Model
{
    public class iTask
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [ScaffoldColumn(true)]
        public int Id { get; set; }

        [Required]
        public int number { get; set; }
        // public int Number { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Should be  about 50 characters")]
        public string Tasks { get; set; }

    }
}
