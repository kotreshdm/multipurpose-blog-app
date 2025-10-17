import Fastify from "fastify";
import cors from "@fastify/cors";
import userRoutes from "./modules/user/routes.js";
import { connectDB } from "./config/db.js";

const fastify = Fastify({ logger: true });
await fastify.register(cors, { origin: "*" });

// ✅ Register your module routes
await fastify.register(userRoutes, { prefix: "/api" });

connectDB(process.env.MONGO_URI);

export default fastify;
