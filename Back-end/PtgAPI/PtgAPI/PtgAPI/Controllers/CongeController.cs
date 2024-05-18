using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using PtgAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace PtgAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CongeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public CongeController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                     select CongeId,Type,Employee,Matric,DateDebut,DateFin,Duree
                            from dbo.Conge
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]

        public JsonResult Post(Conge cng)
        {
            string query = @"insert into dbo.Conge(Type,Employee,Matric,DateDebut,DateFin,Duree) values(
                                             
                                             '" + cng.Type+ @"',
                                             '" + cng.Employee+ @"',
                                             '" + cng.Matric + @"',
                                             '" + cng.DateDebut+ @"',
                                             '" + cng.DateFin + @"',
                                             '" + cng.Duree + @"'
                                             
                                                  )";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]

        public JsonResult Put(Conge cng)
        {
            string query = @" update dbo.Conge set 
                  Type='" + cng.Type + @"'
                 ,Employee='" + cng.Employee + @"'
                  ,Matric='" + cng.Matric + @"'    
                 ,DateDebut='" + cng.DateDebut + @"'     
                 ,DateFin='" + cng.DateFin + @"'
                 ,Duree='" + cng.Duree + @"'
                 
             
                 where CongeId='" + cng.CongeId + @"'
             ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Update Successfully");
        }
        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string query = @"
               delete from  dbo.Conge 
                 
                 where CongeId=" + id + @"
             ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
        
    }

}
