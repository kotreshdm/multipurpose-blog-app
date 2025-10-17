// server/index.js
import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({ logger: true });

// Allow only the Vite dev origin in dev. Replace with your real origin in prod.
await fastify.register(cors, {
  origin: ["http://localhost:5173"], // Vite default dev URL
  credentials: true,
});

// Example route
fastify.get("/api/v1/hello", async (request, reply) => {
  return { msg: "Hello from Fastify 1234" };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Fastify listening on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
