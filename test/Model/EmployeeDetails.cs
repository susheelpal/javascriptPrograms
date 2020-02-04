using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace test.Model
{
    public class EmployeeDetails
    {
        private String firstName;
        private String lastName;
        private String email;
        private String pwd;
        private String confirmPwd;

        public string FirstName { get => firstName; set => firstName = value; }
        public string LastName { get => lastName; set => lastName = value; }
        [Key]
        public string Email { get => email; set => email = value; }
        public string Pwd { get => pwd; set => pwd = value; }
        public string ConfirmPwd { get => confirmPwd; set => confirmPwd = value; }
    }
}
