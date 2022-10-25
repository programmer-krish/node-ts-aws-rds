import { log } from "../logger";
import { Employee } from "../model/employee";
import { Employees } from "../model/employee.interface";

const postEmployee = async (employees: Employees) => {
  try {
    let employeeData = await Employee.create({ ...employees });
    return employeeData;
  } catch (error) {
    log.info(error);
  }
};

export { postEmployee };
