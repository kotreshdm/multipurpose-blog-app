import fp from "fastify-plugin";
import AutoLoad from "@fastify/autoload";
import { join } from "path";

export default fp(async (fastify) => {
  fastify.register(AutoLoad, {
    dir: join(import.meta.dirname, "../modules"),
    indexPattern: /routes\.js$/, // load only route files
  });
});
