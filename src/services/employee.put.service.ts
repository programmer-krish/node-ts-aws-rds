
/**
 * Module  -  UPDATE  EMPLOYEE
 * Author :  Krishamohan Ramachandran
 * Date : 2022
 */
import { log } from "../logger";
import { Employee } from "../model/employee";
import { Employees } from "../model/employee.interface";


const updateEmployee = async (value: Employees, id: string) => {
    try {
        await Employee.update({ ...value }, { where: { id } });
        const updatedEmployee: Employee | null = await Employee.findByPk(id)
        return updatedEmployee;
    } catch (error) {
        log.info(error)
    }

}

export { updateEmployee }


