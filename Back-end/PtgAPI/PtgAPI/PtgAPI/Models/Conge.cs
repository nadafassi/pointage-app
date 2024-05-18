using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtgAPI.Models
{
    public class Conge
    {
       public int CongeId { set; get; }
        public string Type{ set; get; }
        public string Employee { set; get; }
        public string Matric { set; get; }
        public  string DateDebut { set; get; }
       public string DateFin { set; get; }
       public int Duree { set; get; }
   
    }
}
