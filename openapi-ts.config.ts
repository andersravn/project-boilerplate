import { defineConfig } from "@hey-api/openapi-ts";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export default defineConfig({
	input: `${process.env.UMBRACO_API}/umbraco/swagger/delivery/swagger.json`,
	output: "src/types/umbraco",
	plugins: ["@hey-api/client-fetch"],
});
