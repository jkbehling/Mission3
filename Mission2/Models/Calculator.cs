using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class Calculator
    {
        [Required]
        [Range(0,100)]
        public double assign { get; set; }
        [Required]
        [Range(0, 100)]
        public double gp { get; set; }
        [Required]
        [Range(0, 100)]
        public double quizes { get; set; }
        [Required]
        [Range(0, 100)]
        public double exams { get; set; }
        [Required]
        [Range(0, 100)]
        public double INTEX { get; set; }
       
    }
}
