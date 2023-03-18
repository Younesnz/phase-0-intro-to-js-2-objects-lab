// Write your solution in this file!

const employee = 
{
    name: "Younes",
    streetAddress: "Ankara",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]:value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const tempEmployee = {...employee};
    delete tempEmployee[key];
    return tempEmployee;   
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}