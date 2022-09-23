import { RequestHandler } from "express";

import { Employee } from "../model/employee";

export const createEmployee: RequestHandler = async (req, res, next) => {
  let employeeData = await Employee.create({ ...req.body });
  return res.status(200).json({
    message: "Employee record created successfully",
    data: employeeData,
  });
};
