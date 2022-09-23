import { Sequelize } from "sequelize-typescript";
import { Todos } from "../model/todos";
import { config } from "./config";
import { log } from "../logger";
import { Employee } from "../model/employee";

const connection = new Sequelize({
  dialect: "mysql",
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  logging: false,
  port: 3306,
  models: [Todos, Employee],
});

/**
 * Database Connection
 */
const connectDb = async () => {
  try {
    await connection.sync();
    log.info(`RDS MYSQL connected Successfully`);
  } catch (error) {
    log.info(error);
  }
};

export { connectDb };
