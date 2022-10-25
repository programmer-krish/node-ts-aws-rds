
/**
 * Module -  Update Employee Contorller
 * Date - 
 */

import { Request, Response } from 'express';
import { log } from '../logger';
import { updateEmployee } from '../services/employee.put.service';
import { ERRORS } from '../validation/error';
import { postSchema } from '../schemas/schema';


const updateSingleEmployee = async (req: Request, res: Response) => {
    const { error, value } = postSchema.validate(req.body)

    if (error) {
        log.info(error);
        res.status(406).json({ message: 'The  Employee details are invalid' })
    }
    try {
        const id = req.params.id;
        await updateEmployee(value, id);
        res.status(200).json({
            message: 'Employee Updated Successfully'
        })
    } catch (error) {
        log.info(error)
        res.status(404).json({ message: 'Émployee Details not found' })
    }

}

export { updateSingleEmployee }


