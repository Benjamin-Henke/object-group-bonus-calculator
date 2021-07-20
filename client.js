const employees = [
  { // index 0
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  { // index 1
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  { // index 2
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  { // index 3
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  { // index 4
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

for (employee of employees) {
  // employeeEval(object);
  // console.log(...);
  
} // end of for loop
    
function employeeEval (employees) {
  let bonus = 0;
  for (employee of employees) {
    if (employee.reviewRating <= 2) {
      console.log('No Bonus.');
    }
    else if (employee.reviewRating === 3) {
      bonus += (4/100) * employee.annualSalary;
      if (employee.employeeNumber.length === 4) {
        bonus += (5/100) * employee.annualSalary;
      }
    }
    else if (employee.reviewRating === 4) {
      bonus += (6/100) * employee.annualSalary;
      if (employee.employeeNumber.length === 4) {
        bonus += (5/100) * employee.annualSalary;
      }
    }
    else if (employee.reviewRating === 5) {
      bonus += (10/100) * employee.annualSalary;
      if (employee.employeeNumber.length === 4) {
        bonus += (5/100) * employee.annualSalary;
      }
    }
  } // end for of loop
} // end employeeEval

console.log(employeeEval(employees));
