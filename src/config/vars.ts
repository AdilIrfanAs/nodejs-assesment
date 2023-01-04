// import .env variables
import * as dotenv from 'dotenv';
dotenv.config()

type AppConfigs = {
  port: number;
};

const configs: AppConfigs = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 8081
};

export default configs;