using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Model;

namespace test.Repository
{
    interface IEmployee
    {
        void createEmployee(EmployeeDetails employee);
        EmployeeDetails readEmployee();
        void updateEmployee(EmployeeDetails employee);
        void deleteEmployee(String email);
    }
}
