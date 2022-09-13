import { Sequelize } from "sequelize-typescript";
import { Todos } from "../model/todos";
import { config } from "./config";

const connection = new Sequelize({
  dialect: "mysql",
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  logging: false,
  port: 3306,
  models: [Todos],
});

export default connection;
