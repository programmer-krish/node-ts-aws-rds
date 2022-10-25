
import { log } from "../logger";
import { Employee } from "../model/employee";


const getEmployeeById = (id: string) => {
    try {
        const singleEmployee = Employee.findByPk(id);
        return singleEmployee
    } catch (error) {
        log.info(error);
    }
}


export { getEmployeeById }


// export const getTodoById: RequestHandler = async (req, res, next) => {
//   const { id } = req.params;
//   const todos: Todos | null = await Todos.findByPk(id);
//   return res
//     .status(200)
//     .json({ message: "Todo fetched successfully", data: todos });
// };
