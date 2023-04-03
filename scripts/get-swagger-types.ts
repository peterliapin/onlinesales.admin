import { generateApi } from "swagger-typescript-api";
import path from "path";
import dotenv from "dotenv";
import { exit } from "process";

dotenv.config();

const apiPath = process.env.CORE_API_SWAGGER;
if (!apiPath) throw new Error("CORE_API_SWAGGER env isn't set");

generateApi({
  url: apiPath,
  output: path.resolve(process.cwd(), "./src/lib/network"),
  name: "swagger-client.generated.ts",
  httpClientType: "fetch",
}).then(() => exit(0));
