/**
 * Module  - GET SINGLE EMPLOYEE
 * Author :  Krishamohan Ramachandran
 * Date : 25/10/2022
 */

import { ERRORS } from "../validation/error";
import { reqParamasSchemaId } from "../schemas/schema";
import { getEmployeeById } from "../services/employee.getById.service";
import { Request, Response } from "express";
import { log } from "../logger";

const getSingleEmployee = async (req: Request, res: Response) => {
  const { value } = reqParamasSchemaId.validate(req.params.id);
  try {
    const data = await getEmployeeById(value);
    res.status(200).json(data);
  } catch (e) {
    log.info(e);
    return res.status(403).json({
      status: "error",
      error: ERRORS.NOT_FOUND,
    });
  }
};

export { getSingleEmployee };
