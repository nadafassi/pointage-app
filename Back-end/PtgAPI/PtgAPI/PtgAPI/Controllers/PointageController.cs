using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PtgAPI.Models;
using System.Data;
using System.Data.SqlClient;


namespace PtgAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PointageController : ControllerBase
    {
        Pointage ss = new Pointage();

        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public PointageController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                     select PointageId,Employee,Timeint,Timeout
                            from dbo.Pointage 
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

        public JsonResult Post(Pointage ptg)
        {
            ss.Timeint = System.DateTime.Now;
            ss.Timeout = System.DateTime.Now;

            string query = @"insert into dbo.Pointage (Timeint,Timeout,Employee
         ) values(
                                             
                                          
                                             '" + ss.Timeint + @"',
                                             '" + ss.Timeout + @"',
                                             '" + ptg.Employee + @"'
                                            

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
        public JsonResult Put(int PointageId)
        {
            ss.Timeout = System.DateTime.Now;

            string query = @"UPDATE dbo.Pointage SET Timeout='" + ss.Timeout + @"'WHERE PointageId='" + PointageId + "';";

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



        [Route("GetAllEmployeeNames")]
        public JsonResult GetAllEmployeeNames()
        {
            string query = @"
                     select EmployeeName
                            from dbo.Employee
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




        [Route("GetNbrName")]
        public JsonResult GetNbrName()
        {
            string query = @"
                     select SUM(abs( DATEDIFF(hour, CONVERT(TIME,Timeout), CONVERT(TIME,Timeint))))
                            from dbo.Pointage
							where Employee='Sam';




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

    }

}





