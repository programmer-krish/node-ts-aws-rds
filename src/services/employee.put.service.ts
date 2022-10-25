
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





/**
 * export const updateTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Todos.update({ ...req.body }, { where: { id } });
  const updatedTodos: Todos | null = await Todos.findByPk(id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedTodos });
};
 */
