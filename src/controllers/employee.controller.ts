import { RequestHandler } from "express";
import { log } from "../logger";

import { Employee } from "../model/employee";
import { getEmployees } from "../services/employee.get.service";
import { ERRORS } from "../validation/error";


export const getEmployeeById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const employee: Employee | null = await Employee.findByPk(id);
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: employee });
};

//ALl the employee data


