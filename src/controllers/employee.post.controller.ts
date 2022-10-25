import { Request, Response } from "express";
import { log } from "../logger";
import { postEmployee } from "../services/employee.post.service";
import { ERRORS } from "../validation/error";


export const createNewEmployee  = async (req : Request, res :Response) => {
  try {
        const data = await postEmployee(req.body);
        res.status(201).json(data);
    } catch (e) {
        log.info(e);
        return res.status(403).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }
};
