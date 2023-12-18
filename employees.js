const employees = [
  {
    name: "Alice Johnson",
    position: "Software Engineer",
    salary: 95000,
    department: "Engineering",
    performanceRating: 4.7,
  },
  {
    name: "Bob Smith",
    position: "Product Manager",
    salary: 110000,
    department: "Product Management",
    performanceRating: 4.9,
  },
  {
    name: "Charlie Brown",
    position: "Data Analyst",
    salary: 80000,
    department: "Data Science",
    performanceRating: 4.5,
  },
  {
    name: "David Miller",
    position: "HR Specialist",
    salary: 75000,
    department: "Human Resources",
    performanceRating: 4.2,
  },
  {
    name: "Emily Davis",
    position: "Marketing Coordinator",
    salary: 85000,
    department: "Marketing",
    performanceRating: 4.8,
  },
  {
    name: "Frank Wilson",
    position: "QA Tester",
    salary: 90000,
    department: "Engineering",
    performanceRating: 4.6,
  },
  {
    name: "Grace Turner",
    position: "Financial Analyst",
    salary: 95000,
    department: "Finance",
    performanceRating: 4.7,
  },
  {
    name: "Harry White",
    position: "UI/UX Designer",
    salary: 100000,
    department: "Design",
    performanceRating: 4.9,
  },
  {
    name: "Ivy Martin",
    position: "Sales Representative",
    salary: 85000,
    department: "Sales",
    performanceRating: 4.5,
  },
  {
    name: "Jackie Adams",
    position: "Customer Support Specialist",
    salary: 80000,
    department: "Customer Support",
    performanceRating: 4.4,
  },
  {
    name: "Kevin Lewis",
    position: "Systems Administrator",
    salary: 95000,
    department: "IT",
    performanceRating: 4.8,
  },
  {
    name: "Linda Carter",
    position: "Operations Manager",
    salary: 110000,
    department: "Operations",
    performanceRating: 4.9,
  },
  {
    name: "Michael Turner",
    position: "Software Engineer",
    salary: 92000,
    department: "Engineering",
    performanceRating: 4.7,
  },
  {
    name: "Nancy Hill",
    position: "Marketing Manager",
    salary: 105000,
    department: "Marketing",
    performanceRating: 4.8,
  },
  {
    name: "Oscar Robinson",
    position: "Financial Manager",
    salary: 115000,
    department: "Finance",
    performanceRating: 4.9,
  },
  {
    name: "Pamela Foster",
    position: "HR Manager",
    salary: 100000,
    department: "Human Resources",
    performanceRating: 4.8,
  },
  {
    name: "Quincy Bennett",
    position: "Data Scientist",
    salary: 98000,
    department: "Data Science",
    performanceRating: 4.6,
  },
  {
    name: "Rachel Adams",
    position: "Software Developer",
    salary: 90000,
    department: "Engineering",
    performanceRating: 4.7,
  },
  {
    name: "Samuel James",
    position: "Customer Success Manager",
    salary: 105000,
    department: "Customer Support",
    performanceRating: 4.8,
  },
  {
    name: "Tracy Howard",
    position: "Sales Manager",
    salary: 110000,
    department: "Sales",
    performanceRating: 4.9,
  },
];
let result = employees.filter((employee) => {
  return {
    position: employee.position,
    salary: employee.salary,
  };
});
console.log(result);
// me code

const highPaidEmployeesByDepartment = (employee, department, salaryLine) => {
  const answer = employee.filter(
    (a) => a.department == department && a.salary > salaryLine
  );
  return answer;
};
console.log(highPaidEmployeesByDepartment(employees, "Finance", 90000));

// Task 1 High paid employee by department

const highPaidEmployees = (employees, department, thresholdSalary) => {
  const answer = employees.filter(
    (employee) =>
      employee.department === department && employee.salary > thresholdSalary
  );
  return answer;
};
console.log("Finance", highPaidEmployees(employees, "Finance", 90000));

//me code
const topPerformer = (employees, ratingLine) => {
  const answer = employees
    .filter((a) => a.performanceRating >= ratingLine)
    .map(({ name, performanceRating }) => ({ name, performanceRating }));
  return answer;
};
console.log(topPerformer(employees, 4.8));

// Task 2 Find top performers employee
const topPerformersReport = (employees, minRating) => {
  const topPerformers = employees
    .filter((employee) => employee.performanceRating >= minRating)
    .map(({ name, performanceRating }) => ({ name, performanceRating }));
  return topPerformers;
};
console.log(topPerformersReport(employees, 4.8));

let num = "1234";
let numstr = num.toString();
// let strNum = 123;
// let numFromStru = Number(strNum);
console.log(typeof numstr);

let word = "Hello world";
for (let i = 0; i < word.length; i++) {
  console.log(word.charAt(i));
}
console.log(word);
