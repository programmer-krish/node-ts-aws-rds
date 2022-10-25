import { Router } from "express";

import {
  
  getEmployeeById,
} from "../controllers/employee.controller";
import { getEmployeeAll } from "../controllers/employee.get.controller";
import { createNewEmployee } from "../controllers/employee.post.controller";
const router = Router();

router.post("/employee", createNewEmployee);
router.get("/employee/:id", getEmployeeById);
router.get('/employee', getEmployeeAll);

export default router;
