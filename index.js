// Write your solution in this file!
const employee = {
    name: "Rafael",
    streetAddress: "123",
}

function updateEmployeeWithKeyAndValue(employee, name, rafa){
    const modifyName = {...employee};
    modifyName[name] = rafa;
    return modifyName;
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(){
    const deleteEmployee = {...employee};
    delete deleteEmployee.name;
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name;
    return employee;
}