import dotenv from "dotenv";
dotenv.config();

const config = {
  host: process.env.AWS_HOST,
  database: process.env.AWS_DATABASE,
  username: process.env.AWS_USERNAME,
  password: process.env.AWS_PASSWORD,
};

export { config };
