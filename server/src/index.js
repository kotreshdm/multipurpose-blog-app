import fastify from "./app.js";
import { PORT } from "./config/env.js";

fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`🚀 Server running at s ${address}`);
});
