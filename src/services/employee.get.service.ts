import { log } from "../logger";
import { Employee } from "../model/employee";


const getEmployees = async () => {
    try {
        const employees = await Employee.findAll();
        return employees;
    } catch (e) {
        log.error("Error fetching employees:", e);
        throw e;
    }
};

export { getEmployees };
