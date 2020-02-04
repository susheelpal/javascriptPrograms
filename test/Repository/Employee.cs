using System.Data;
using System.Data.SqlClient;
using test.Model;

namespace test.Repository
{
    public class Employee : IEmployee
    {
        public string dbConn = "Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=EmployeeManagement;Integrated Security=SSPI";
        public void createEmployee(EmployeeDetails employee)
        {
            SqlConnection con = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spAddEmployee", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@FirstName", employee.FirstName);
            cmd.Parameters.AddWithValue("@LastName", employee.LastName);
            cmd.Parameters.AddWithValue("@Email", employee.Email);
            cmd.Parameters.AddWithValue("@Password", employee.Pwd);
            cmd.Parameters.AddWithValue("@ConfirmPassword", employee.ConfirmPwd);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public void deleteEmployee(string email)
        {
            SqlConnection con = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spDeleteEmployee", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Email", email);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public EmployeeDetails readEmployee()
        {
            EmployeeDetails employee = new EmployeeDetails();
            SqlConnection con = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spGetAllEmployee", con);
            cmd.CommandType = CommandType.StoredProcedure;
            con.Open();
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                employee.FirstName = rdr["FirstName"].ToString();
                employee.LastName = rdr["LastName"].ToString();
                employee.Email = rdr["Email"].ToString();
                employee.Pwd = rdr["Password"].ToString();
                employee.ConfirmPwd = rdr["ConfirmPassword"].ToString();
            }
            return employee;
        }
           

        public void updateEmployee(EmployeeDetails employee)
        {
            SqlConnection con = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spUpdateEmployee", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@FirstName", employee.FirstName);
            cmd.Parameters.AddWithValue("@LastName", employee.LastName);
            cmd.Parameters.AddWithValue("@Email", employee.Email);
            cmd.Parameters.AddWithValue("@Password", employee.Pwd);
            cmd.Parameters.AddWithValue("@ConfirmPassword", employee.ConfirmPwd);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}