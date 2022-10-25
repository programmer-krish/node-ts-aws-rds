import { Router } from "express";

import {

  getSingleEmployee,
} from "../controllers/employee.getById.controller";
import { getEmployeeAll } from "../controllers/employee.get.controller";
import { createNewEmployee } from "../controllers/employee.post.controller";
import { updateSingleEmployee } from "../controllers/employee.put.controller";
const router = Router();

router.post("/employee", createNewEmployee);
router.get("/employee/:id", getSingleEmployee);
router.get('/employee', getEmployeeAll);
router.put("/employee/:id", updateSingleEmployee);

export default router;
