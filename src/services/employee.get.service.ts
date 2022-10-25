import { log } from "../logger";
import { Employee } from "../model/employee";


const getEmployees = async () => {
    try {
        const getUser = await Employee.findAll();
        return getUser;
    } catch (e) {
        log.info(e);
    }
};

export { getEmployees };
