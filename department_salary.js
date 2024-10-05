//Task 1 Create a Department Structure:

const RHCompany = {
    departments: [
         {
            departmentName: 'Human Resource',
            employees: [
                 {
                    name: 'Sadman',
                    salary: 100000,
                    subordinates: [
                         {
                            name: 'Raiyan',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Nayeem',
                                    salary: 60000,
                                    subordinates: []
                                }]}]},
                    {
                        name: 'Ashim',
                        salary: 90000,
                        subordinates: []
                     }]},
                {
                    departmentName: 'Information Technology',
                    employees: [
                        {
                            name: 'Sreela',
                            salary: 85000,
                            subordinates: [
                                {
                                    name: 'Shrabasty',
                                    salary: 70000,
                                    subordinates: []
                                }]},
                                {
                                    name: 'Tazrin',
                                    salary: 95000,
                                    subordinates: []
                                }]}]};

//Task 2 Create a Recursive Function to Calculate Total Salary for a Department:
// Function to recursively calculate total department sales of an employee and their subordinates

function calculateDepartmentSalary(departmentEmployees) {
let totalDepartmentSalary = 0;

// will be using loop method to look for each employee
for (let employee of departmentEmployees) {
totalDepartmentSalary += employee.salary;

   if (employee.subordinates.length > 0)  {
                    totalDepartmentSalary += calculateDepartmentSalary(employee.subordinates)     
        }
    }
        return totalDepartmentSalary
}   

    let DepartmentSalary = calculateDepartmentSalary(RHCompany.departments[0].employees)
    console.log(`Total Salary for the Human Resource department: $${DepartmentSalary}`)

// output Total Salary for the Human Resource department: $330000

// Task 3 Create a Function to Calculate the Total Salary for All Departments
//Task 3- Create a Function to Calculate the Total Salary for all Departments
function calculateCompanySalary(company) {
    let totalCompanySalary = 0;

    company.departments.forEach(department => {
        totalCompanySalary += calculateDepartmentSalary(department.employees);
    });
    return totalCompanySalary;
}

console.log(`Total Salary for RHCompany: $${calculateCompanySalary(RHCompany)}`); 

//Out put Total Salary for RHCompany: $580000
