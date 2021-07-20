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

// console.log( employees );

    

 
  // This for loop find the base percentage value
  for (employee of employees) {
    bonusPercentage = 0;

    if (employee.reviewRating <= 2) {
      console.log('No Bonus.');
    }
    else if (employee.reviewRating === 3) {
      bonusPercentage += 4;
      if (employee.employeeNumber.length === 4) {
        bonusPercentage += 5;
      }
    }
    else if (employee.reviewRating === 4) {
      bonusPercentage += 6;
      if (employee.employeeNumber.length === 4) {
        bonusPercentage += 5;
      }
    }
    else if (employee.reviewRating === 5) {
      bonusPercentage += 10;
      if (employee.employeeNumber.length === 4) {
        bonusPercentage += 5;
      }
    }
  } // end for of loop

// console.log(employeeEval(employees));

// function greetEmployee(employee) {
//   const howToGreet = 'Hello you lovely person named ' + employee.name
//   const soManyDollars = 'This person makes ' + employee.annualSalary + ' dollars'
  
//   const newEmployeeObject = {
//     howToGreet: howToGreet,
//     dollars: soManyDollars
//   }

//   return newEmployeeObject
// }

if (employee.review <= 2) {
  console.log('No Bonus');
}
else if (employee.review === 3) {
  // employee gets 4%
}


function employeeEval (employee) {
  const employeeName = employee.name;
  const bonusPercentage = bonusPercentage;                                                                   // running total of the percent employee gets i.e. 9% 
  const totalCompensation = (bonusPercentage)/100 * employee.employeeSalary;                  // annualSalary plus bonus 
  const totalBonus = totalBonus;                                                                        // percentage multiplied by salary

  const newEmployeeObject = {
    employeeName: employeeName,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }
  return newEmployeeObject;
} // end employeeEval



for (employee of employees) {
  // call the function
  employeeEval(employee);
  // return the object
  console.log();
  
}
