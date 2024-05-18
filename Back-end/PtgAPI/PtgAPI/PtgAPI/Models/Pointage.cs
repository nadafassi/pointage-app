using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PtgAPI.Models
{
    
    public class Pointage
    {
      
        public int PointageId { get; set; } 
     
        [Display(Name="Timeint")]
      
        [DisplayFormat(ApplyFormatInEditMode =true,DataFormatString = "{0:yyyy-MM-dd HH:mm:ss }")]

        public DateTime Timeint { get; set; }

        [Display(Name = "Timeout")]

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd HH:mm:ss }")]

        public DateTime Timeout { get; set; }

        public string Employee { get; set; }
       

        public DateTime nbrH { get; set; }


    }
}
        

       
    

