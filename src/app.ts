import express from "express";
import morgan from "morgan";
import cors from "cors";
// import connection from "./config/connection";
import todoRoutes from "./routes/todos";
import employeeRoutes from "./routes/employee";
import { connectDb } from "./config/connection";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);
app.use("/api", employeeRoutes);

connectDb();

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.stack = "401";
  next(error);
});
export { app };
